import { get, post, put, deleteIt } from "./crud.js";
document.querySelector("button").addEventListener("click", () => {
  post(showCreature);
});

function showCreature(creature) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = creature.name;
  copy.querySelector(".color").textContent = creature.color;
  copy
    .querySelector("button")
    .addEventListener("click", (e) => deleteIt(creature._id, e));
  document.querySelector("main").appendChild(copy);
}

get(showCreature);
