// ----- Theme toggle -----
const themeToggle = document.getElementById("theme-toggle");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(localStorage.getItem("theme") || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

// ----- Idea board (saved in localStorage) -----
const ideaForm = document.getElementById("idea-form");
const ideaInput = document.getElementById("idea-input");
const ideaList = document.getElementById("idea-list");
const emptyMsg = document.getElementById("empty-msg");

let ideas = JSON.parse(localStorage.getItem("ideas") || "[]");

function saveIdeas() {
  localStorage.setItem("ideas", JSON.stringify(ideas));
}

function makeButton(label, title, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.title = title;
  button.addEventListener("click", onClick);
  return button;
}

function renderIdeas() {
  ideaList.innerHTML = "";
  emptyMsg.hidden = ideas.length > 0;

  [...ideas]
    .sort((a, b) => b.votes - a.votes)
    .forEach((idea) => {
      const li = document.createElement("li");
      li.className = "idea";

      const votes = document.createElement("span");
      votes.className = "votes";
      votes.textContent = idea.votes > 0 ? `+${idea.votes}` : idea.votes;

      // textContent (not innerHTML) so user input can't inject HTML
      const text = document.createElement("span");
      text.className = "idea-text";
      text.textContent = idea.text;

      li.append(
        votes,
        text,
        makeButton("+1", "Upvote", () => vote(idea.id, 1)),
        makeButton("-1", "Downvote", () => vote(idea.id, -1)),
        makeButton("remove", "Delete", () => deleteIdea(idea.id)),
      );
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
  { name: "Teammate One", role: "frontend" },
  { name: "Teammate Two", role: "backend" },
  { name: "Teammate Three", role: "design" },
];

const teamList = document.getElementById("team-list");
team.forEach((member) => {
  const li = document.createElement("li");
  const name = document.createElement("span");
  name.textContent = member.name;
  const role = document.createElement("span");
  role.className = "role";
  role.textContent = member.role;
  li.append(name, role);
  teamList.append(li);
});

// ----- Footer year -----
document.getElementById("year").textContent = new Date().getFullYear();
