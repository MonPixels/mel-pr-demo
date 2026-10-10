const test = require('node:test');
const assert = require('node:assert');
const { subtotal, total } = require('../checkout');

const cart = [
  { name: 'Running shoes', price: 100, quantity: 1 },
  { name: 'Socks', price: 10, quantity: 2 },
];

test('subtotal adds price times quantity', () => {
  assert.strictEqual(subtotal(cart), 120);
});

test('total adds 7% tax', () => {
  assert.strictEqual(total(cart), 128.4);
});
