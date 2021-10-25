import { get, post, put, deleteIt } from "./crud.js";
document.querySelector("button").addEventListener("click", () => {
  post(showCreature);
});

function showCreature(creature) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = creature.name;
  copy.querySelector(".color").textContent = creature.color;
  copy.querySelector("[data-years]").textContent = creature.age;
  copy.querySelector("[data-mythology]").textContent = creature.mythology;
  copy.querySelector("[data-alignment]").textContent = creature.alignment;
  copy.querySelector("[data-texture]").textContent = creature.texture;
  copy.querySelector("[data-horns]").textContent = creature.horns;
  copy.querySelector("[data-species]").textContent = creature.species;
  creature.abilities.forEach((ability) => {
    const li = document.createElement("li");
    li.textContent = ability;
    copy.querySelector("ol").appendChild(li);
  });

  copy
    .querySelector("button")
    .addEventListener("click", (e) => deleteIt(creature._id, e));
  document.querySelector("main").appendChild(copy);
}

get(showCreature);
/*
const data = {
    
    abilities: ["flying", "fire breathing", "acid breath"],
  };
*/
