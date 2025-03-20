const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);
console.log(promise); // pending because promise resolve after 3 second
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Producer:
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    // 1. Validate the cart details:
    if (!validateCart(cart)) {
      return reject("Cart detail is not valid"); // Added return to stop execution
    }

    // Logic for creating an order:
    const orderId = "9911";
    if (orderId) {
      setTimeout(() => {
        resolve("Order is created successfully with ID: " + orderId);
      }, 3000);
    }
  });
  return pr;
}

// Function to validate cart (Example)
function validateCart(cart) {
  return cart.length > 0; // Checks if cart is not empty
}
