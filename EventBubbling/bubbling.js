// // Event Bubbling:

// document.getElementById("grandParent").addEventListener("click", function () {
//   console.log("grandParent Div Clicked!");
// });

// document.getElementById("parent").addEventListener("click", function () {
//   console.log("Parent Div Clicked!");
// });

// document.getElementById("child").addEventListener("click", function () {
//   console.log("Child Div Clicked!");
// });

/* --------------------------------------------------------------------------- */

// Event Capturing aka Trickling in Javascript

document.getElementById("grandParent").addEventListener(
  "click",
  function () {
    console.log("grandParent Div Clicked!");
  },
  true
);

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent Div Clicked!");
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  function () {
    console.log("Child Div Clicked!");
  },
  true
);
