// Serves the site from src/ and stores ideas in a SQLite file (ideas.db).
// Run with: npm start, then open http://localhost:3000
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

const PORT = process.env.PORT || 3000;
const SITE_DIR = path.join(__dirname, "src");

// ----- Database -----
const db = new DatabaseSync(path.join(__dirname, "ideas.db"));
db.exec(`
  CREATE TABLE IF NOT EXISTS ideas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL CHECK (length(text) BETWEEN 1 AND 120),
    votes INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

const listIdeas = db.prepare("SELECT id, text, votes FROM ideas ORDER BY votes DESC, id");
const insertIdea = db.prepare("INSERT INTO ideas (text) VALUES (?)");
const voteIdea = db.prepare("UPDATE ideas SET votes = votes + ? WHERE id = ?");
const deleteIdea = db.prepare("DELETE FROM ideas WHERE id = ?");

// ----- API -----
function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

async function readJson(req) {
  let body = "";
  for await (const chunk of req) body += chunk;
  return JSON.parse(body || "{}");
}

// GET /api/ideas, POST /api/ideas, POST /api/ideas/:id/vote, DELETE /api/ideas/:id
async function handleApi(req, res, pathname) {
  const match = pathname.match(/^\/api\/ideas(?:\/(\d+)(\/vote)?)?$/);
  if (!match) return sendJson(res, 404, { error: "Not found" });
  const id = match[1] ? Number(match[1]) : null;
  const isVote = Boolean(match[2]);

  if (req.method === "GET" && !id) {
    return sendJson(res, 200, listIdeas.all());
  }
  if (req.method === "POST" && !id) {
    const text = String((await readJson(req)).text ?? "").trim();
    if (!text || text.length > 120) {
      return sendJson(res, 400, { error: "Idea must be 1-120 characters" });
    }
    insertIdea.run(text);
    return sendJson(res, 201, { ok: true });
  }
  if (req.method === "POST" && id && isVote) {
    const delta = (await readJson(req)).delta > 0 ? 1 : -1;
    voteIdea.run(delta, id);
    return sendJson(res, 200, { ok: true });
  }
  if (req.method === "DELETE" && id && !isVote) {
    deleteIdea.run(id);
    return sendJson(res, 200, { ok: true });
  }
  sendJson(res, 405, { error: "Method not allowed" });
}

// ----- Static files -----
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

function serveFile(res, pathname) {
  const filePath = path.join(SITE_DIR, pathname === "/" ? "index.html" : pathname);
  // Don't serve anything outside src/
  if (!filePath.startsWith(SITE_DIR + path.sep)) {
    res.writeHead(403).end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404).end("Not found");
      return;
    }
    const type = MIME_TYPES[path.extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type }).end(data);
  });
}

// ----- Server -----
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (pathname.startsWith("/api/")) {
      await handleApi(req, res, pathname);
    } else {
      serveFile(res, pathname);
    }
  } catch (error) {
    console.error(error);
    sendJson(res, 400, { error: "Bad request" });
  }
});

server.listen(PORT, () => {
  console.log(`Site running at http://localhost:${PORT}`);
});
