import { get, post, put, deleteIt } from "./crud.js";
import { rangeColorChanger, autoExpandTextarea } from "./utils.js";

function showCreature(creature) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = creature.name;
  // copy.querySelector(".color").textContent = creature.color;
  copy
    .querySelector(".card")
    .style.setProperty("--creature-color", creature.color);
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
    .querySelector("button[data-delete]")
    .addEventListener("click", (e) => deleteIt(creature._id, e));
  document.querySelector("#cards").appendChild(copy);
}

get(showCreature);
/*
const data = {
    
    abilities: ["flying", "fire breathing", "acid breath"],
  };
*/

rangeColorChanger();
autoExpandTextarea();

const form = document.querySelector("form");
form.setAttribute("novalidate", true);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    let horns = true;
    if (form.elements.horns.value === "no") {
      horns = false;
    }
    const data = {
      name: form.elements.name.value,
      color: form.elements.color.value,
      age: form.elements.age.value,
      mythology: form.elements.mythology.value,
      alignment: form.elements.alignment.value,
      texture: form.elements.texture.value,
      horns: horns,
      species: form.elements.species.value,
      abilities: form.elements.abilities.value.split("\n"),
    };
    console.log(data);
    post(data, showCreature);
  } else {
    form.reportValidity();
  }
});
