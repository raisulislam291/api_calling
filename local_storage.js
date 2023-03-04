/** @format */

// localStorage store data as key value pair - string

// // ========set Item=======
// localStorage.setItem("userName", "Raisul Islam");
// localStorage.setItem("password", "82642");

// // ========get Item=======
// const userName = localStorage.getItem("userName");
// const userPassword = localStorage.getItem("password");

// console.log(userName, userPassword);

// // ========remove Item=======
// localStorage.removeItem("userName");

const countries = ["Australia", "Bangladesh", "Canada"];
localStorage.setItem("countries", JSON.stringify(countries));

// ========get Item=======

const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);