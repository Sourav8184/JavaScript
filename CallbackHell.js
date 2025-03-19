const cart = ["shoes", "pants", "kurta"];

/*
1. Importance of Callback:
2. Issue with Callback:
    a. Callback hell or Pyramid of doom
    b. inversion of control: we give the controll of proceedPayment to the 
       another api or another methods it's not a good things. if they not call
       proceedPayment after creating the order or call 2 times.
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
