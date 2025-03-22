// const inputField = document.querySelector("#search");
// const nameField = document.querySelector("#result");

// inputField.addEventListener("input", (e) => {
//   nameField.innerText = e.target.value;
// });

/* --------------------------------------------------------- */

// const inputField = document.querySelector("#search");
// const nameField = document.querySelector("#result");

// inputField.addEventListener("input", (e) => {
//   const userData = e.target.value;
//   localStorage.myName = userData;
//   nameField.innerText = localStorage.myName;
// });

/* --------------------------------------------------------- */

const inputField = document.querySelector("#search");
const nameField = document.querySelector("#result");

nameField.innerText = localStorage.getItem("myName");

inputField.addEventListener("input", (e) => {
  localStorage.setItem("myName", e.target.value);
  nameField.innerText = localStorage.getItem("myName");
});

/* --------------------------------------------------------- */

// Difference:

// if the value are not present in the local storage but you access like this:
// localStorage.my;
// undefined;

// if the value are not present in the local storage but you access like this:
// localStorage.getItem("my");
// null;
