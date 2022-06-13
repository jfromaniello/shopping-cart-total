const assert = require('assert');
const { getTotal } = require('./..');


const shopingCart = [
  { product: 'pear', price: 10, quantity: 1 },       // ===> 10
  { product: 'apple', price: 15, quantity: 2 },      // ===> 30
  { product: 'strawberry', price: 20, quantity: 3 }, // ===> 60
];

assert.equal(
  getTotal(shopingCart),
  100,
  'It should be 100 for the example');


assert.equal(
  getTotal([]),
  0,
  'It should be 0 for an empty cart');

console.log('all tests are good')
