function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

function callApi(event) {
  document.getElementById(
    "result"
  ).innerText = `You typed: ${event.target.value}`;
}

document
  .getElementById("search")
  .addEventListener("input", debounce(callApi, 500));
