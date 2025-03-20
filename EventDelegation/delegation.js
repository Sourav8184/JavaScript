// ✅ Efficient: Works even if new buttons are added dynamically.

document
  .getElementById("button-container")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("btn")) {
      alert(`${event.target.innerText} Clicked!`);
    }
  });
