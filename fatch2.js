/** @format */

console.clear();
const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const message = `Error: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

//delete data

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

deleteData();

//patch data

const patchData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "fooma",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

patchData();

//update data

const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "fool",
      body: "barma",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

updateData();

//send data

const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

sendData();

//create data

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

getData();
