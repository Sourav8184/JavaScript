const cart = ["shoes", "pants", "kurta"];

/*
1. Importance of Callback:
2. Issue with Callback:
    a. Callback hell or Pyramid of doom : If multiple callbacks depend on each 
    other, they may get deeply nested, making the code harder to read and maintain.
    b. inversion of control or l: we give the controll of proceedPayment to the 
       another api or another methods it's not a good things. if they not call
       proceedPayment after creating the order or call 2 times.

    Reasons for Loss of Control in Callbacks:
        1. Multiple Calls (Unintended Executions)
            If a callback is called multiple times instead of once, it can cause 
            unexpected behaviors.
            Example: Calling a callback inside a loop without proper checks.
*/

// 1.Create order
api.createOrder(cart, function () {
  // 2. payment
  api.proceedPayment(function () {
    // 3. showOrder
    api.showOrder(function () {
      // 4. Update Wallet
      api.updateWallet();
    });
  });
});
