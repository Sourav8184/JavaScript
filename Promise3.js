const cart = ["shoes", "pants", "kurta"];
const invalidCart = [];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .catch((error) => {
    console.log("Error while creating the order: ", error.message);
  })
  .then((orderId) => {
    return proceedPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((error) => {
    console.log("Error while process a payment:", error.message);
  })
  .finally(() => {
    console.log("Run always");
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
        resolve(orderId);
      }, 3000);
    }
  });
  return pr;
}

// Function to validate cart (Example)
function validateCart(cart) {
  return cart.length > 0; // Checks if cart is not empty
}

// Function to Payment process (Example)
function proceedPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (!orderId) {
      reject("Payment not done");
    }
    resolve("Payment Successfully");
  });
}
