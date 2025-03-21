const callApi = async (e) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${e.target.value}`
  );
  const data = await res.json();
  console.log(data.products);
};

const debounce = (callback, delay = 600) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const input = document.getElementById("search");
input.addEventListener("input", debounce(callApi, 500));
