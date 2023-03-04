/** @format */

// sessionStorage.setItem("user1", "robin");
// sessionStorage.setItem("user2", "tania");
// const userName = sessionStorage.getItem("user");

// console.log(userName);

// sessionStorage.removeItem("user");
// console.log(userName);

// sessionStorage.clear();

const user = { name: "Robin", id: "291" };
sessionStorage.setItem("user", JSON.stringify(user));

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);