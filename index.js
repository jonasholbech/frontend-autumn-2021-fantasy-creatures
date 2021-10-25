document.querySelector("button").addEventListener("click", post);
function get() {
  fetch("https://frontendspring21-b266.restdb.io/rest/fantasty-creatures", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "614d91cfdfa7346e2f969003",
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      showCreatures(data);
    });
}

function showCreatures(creatures) {
  document.querySelector("main").innerHTML = "";
  creatures.forEach((creature) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = creature.name;
    copy.querySelector(".color").textContent = creature.color;
    document.querySelector("main").appendChild(copy);
  });
}

function post() {
  const data = {
    name: "Jonnie " + Math.random(),
    color: "bada55",
    age: 40,
    mythology: "KEA",
  };

  const postData = JSON.stringify(data);
  fetch("https://frontendspring21-b266.restdb.io/rest/fantasty-creatures", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "614d91cfdfa7346e2f969003",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => {
      get();
    });
}
get();
