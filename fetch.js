/** @format */

console.clear();
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //create data /POST method
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),

  // Update data /PUT method
  method: "PUT",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    id: 1,
    title: "fool",
    body: "barma",
    userId: 1,
  }),

  //single data update /PATCH method
  method: "PATCH",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    title: "fooma",
  }),

  //DELETE method
  method: "DELETE",
})
  .then((res) => {
    if (!res.ok) {
      const message = `Error : ${res.status}`;
      throw new Error(message);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
