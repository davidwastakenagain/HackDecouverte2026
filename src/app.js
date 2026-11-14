// ----- Theme toggle -----
const themeToggle = document.getElementById("theme-toggle");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(localStorage.getItem("theme") || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

// ----- Typing effect in the hero -----
const words = ["discover.", "learn.", "connect.", "create."];
const typedEl = document.getElementById("typed");
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const word = words[wordIndex];
  charIndex += deleting ? -1 : 1;
  typedEl.textContent = word.slice(0, charIndex);

  let delay = deleting ? 50 : 100;
  if (!deleting && charIndex === word.length) {
    deleting = true;
    delay = 1500;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 300;
  }
  setTimeout(typeLoop, delay);
}
typeLoop();

// ----- Idea board (saved in localStorage) -----
const ideaForm = document.getElementById("idea-form");
const ideaInput = document.getElementById("idea-input");
const ideaList = document.getElementById("idea-list");
const emptyMsg = document.getElementById("empty-msg");

let ideas = JSON.parse(localStorage.getItem("ideas") || "[]");

function saveIdeas() {
  localStorage.setItem("ideas", JSON.stringify(ideas));
}

function renderIdeas() {
  ideaList.innerHTML = "";
  emptyMsg.hidden = ideas.length > 0;

  [...ideas]
    .sort((a, b) => b.votes - a.votes)
    .forEach((idea) => {
      const li = document.createElement("li");
      li.className = "idea";

      const up = document.createElement("button");
      up.textContent = "▲";
      up.title = "Upvote";
      up.addEventListener("click", () => vote(idea.id, 1));

      const votes = document.createElement("span");
      votes.className = "votes";
      votes.textContent = idea.votes;

      const down = document.createElement("button");
      down.textContent = "▼";
      down.title = "Downvote";
      down.addEventListener("click", () => vote(idea.id, -1));

      // textContent (not innerHTML) so user input can't inject HTML
      const text = document.createElement("span");
      text.className = "idea-text";
      text.textContent = idea.text;

      const remove = document.createElement("button");
      remove.textContent = "✕";
      remove.title = "Delete";
      remove.addEventListener("click", () => deleteIdea(idea.id));

      li.append(up, votes, down, text, remove);
      ideaList.append(li);
    });
}

function vote(id, delta) {
  const idea = ideas.find((i) => i.id === id);
  idea.votes += delta;
  saveIdeas();
  renderIdeas();
}

function deleteIdea(id) {
  ideas = ideas.filter((i) => i.id !== id);
  saveIdeas();
  renderIdeas();
}

ideaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = ideaInput.value.trim();
  if (!text) return;
  ideas.push({ id: Date.now(), text, votes: 0 });
  ideaInput.value = "";
  saveIdeas();
  renderIdeas();
});

renderIdeas();

// ----- Team (edit this list with your teammates) -----
const team = [
  { name: "Teammate One", role: "Frontend" },
  { name: "Teammate Two", role: "Backend" },
  { name: "Teammate Three", role: "Design" },
];

const teamList = document.getElementById("team-list");
team.forEach((member) => {
  const card = document.createElement("article");
  card.className = "card";
  const initials = member.name.split(" ").map((part) => part[0]).join("").slice(0, 2);
  card.innerHTML = `
    <div class="avatar">${initials}</div>
    <h3>${member.name}</h3>
    <p>${member.role}</p>
  `;
  teamList.append(card);
});

// ----- Footer year -----
document.getElementById("year").textContent = new Date().getFullYear();
