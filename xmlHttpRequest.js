/** @format */

console.clear();

const makeRequest = (method, url, data) => {
 return new Promise((resolve, reject) => {
     const xhr = new XMLHttpRequest();
     xhr.open(method, url);

     xhr.setRequestHeader("content-Type", "application/json");
     xhr.onload = () => {
       let data = xhr.response;
       console.log(xhr.status);
       console.log(JSON.parse(data));
     };

     xhr.onerror = () => {
       console.log("Error is here!");
     };

     xhr.send(JSON.stringify(data));
 })
};

const getData = () => {
    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
    .then((result) => {
        console.log(result);
    });
};

const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};
const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "fool",
    body: "barma",
    userId: 1,
  });
};
const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "This is changed",
  });
};
const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};
sendData();
getData();
updateData();
updateSingleData();
deleteData();
