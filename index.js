module.exports.getTotal = function (shopingCart) {
  let total = 0;

  for (const product of shopingCart) {
    total += product.price * product.quantity;
  }

  return total;
}
