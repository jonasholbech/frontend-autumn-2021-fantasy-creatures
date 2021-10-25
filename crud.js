import { endpoint, headers } from "./settings.js";

export function get(callback) {
  fetch(endpoint, {
    method: "get",
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("main").innerHTML = "";
      data.forEach(callback);
    });
}

export function post(callback) {
  const data = {
    name: "Jonnie " + Math.random(),
    color: "bada55",
    age: 40,
    mythology: "KEA",
  };

  const postData = JSON.stringify(data);
  fetch(endpoint, {
    method: "post",
    headers,
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    });
}

export function deleteIt(id, evt) {
  //evt.target.parentElement.remove();
  fetch(endpoint + "/" + id, {
    method: "delete",
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      evt.target.parentElement.remove();
    });
}

export function put(id) {
  const data = {
    name: "Dannie " + Math.random(),
    color: "deeppink",
    age: 40,
    mythology: "KEA",
  };
  let postData = JSON.stringify(data);

  fetch(endpoint + "/" + id, {
    method: "put",
    headers,
    body: postData,
  })
    .then((d) => d.json())
    .then((t) => get());
}
