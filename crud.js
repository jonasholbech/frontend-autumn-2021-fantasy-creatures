import { endpoint, headers } from "./settings.js";

export function get(callback) {
  fetch(endpoint, {
    method: "get",
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#cards").innerHTML = "";
      data.forEach(callback);
    });
}

export function post(data, callback) {
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
  fetch(endpoint + "/" + id, {
    method: "delete",
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      evt.target.closest("article").remove();
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
