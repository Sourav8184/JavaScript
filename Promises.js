/*
    What is a Promise in JavaScript ?
        A Promise in JavaScript is an object that represents the eventual completion 
        (success) or failure of an asynchronous operation. It helps in handling 
        asynchronous operations like fetching data from an API, reading files, or 
        executing database queries without blocking the execution of the program.

        Promises solve the issues of callback hell and loss of control by providing 
        a structured way to handle asynchronous tasks.

    Why Do We Use Promises?
        1. To Handle Asynchronous Code Properly
        JavaScript is single-threaded, meaning it executes one task at a time. 
        When dealing with time-consuming operations (like API requests), using 
        Promises allows JavaScript to continue executing other tasks instead of waiting
        for the operation to complete.

        2. Avoiding Callback Hell (Deep Nesting Issue)
        Before Promises, asynchronous tasks were handled using callbacks, 
        leading to deeply nested code, making it hard to read and maintain.

    Promise States
        A Promise has three states:
            1. Pending → Initial state (waiting for the operation to complete).
            2. Fulfilled (Resolved) → The operation completed successfully (resolve).
            3. Rejected → The operation failed (reject).

*/

/* -------------------------------X------------------------------- */

const cart = ["shoes", "pants", "kurta"];

//    Without Promises (Callback Hell Example):

// 1.Create order
api.createOrder(cart, function (orderId) {
  // 2. payment
  api.proceedPayment(orderId, function () {
    // 3. showOrder
    api.showOrder(orderId, function () {
      // 4. Update Wallet
      api.updateWallet(orderId);
    });
  });
});

/* -------------------------------X------------------------------- */

//    Without Promises:
// 1.Create order
api.createOrder(cart, function (orderId) {
  // 2. payment
  api.proceedPayment(orderId, function () {});
});

//    With Promises:
const promise = createOrder(cart);

// { data : undefined }

// Solved inversion of control using promises:
// Solved callback hell problem also:
promise
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrder(paymentInfo);
  })
  .then(function (orderId) {
    return updateWallet(orderId);
  });

promise
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrder(paymentInfo))
  .then((orderId) => updateWallet(orderId));
