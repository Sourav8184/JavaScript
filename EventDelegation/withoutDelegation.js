// ❌ Problem: If new buttons are added dynamically, they won't have an event
// listener.

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Button Clicked!");
  });
});
