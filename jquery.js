/** @format */

console.clear();

const makeRequest = async (url, method, data) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
      data: data,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
// ==========delete=========
const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then((res) => console.log(res));
};
deleteData();

// ==========put=========
const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
    id: 1,
    title: "fooma",
    body: "barma",
    userId: 1,
  }).then((res) => console.log(res));
};
updateData();
// =========post=========
const createData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/", "POST", {
    title: "foo",
    body: "bar",
    userId: 1,
  }).then((res) => console.log(res));
};
createData();

// ==========get========
const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET").then((res) => console.log(res));
};
getData();
