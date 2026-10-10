// Cart checkout helpers
const { applyDiscount } = require('./discount');

const TAX_RATE = 0.07;

function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function total(items, code) {
  const sub = applyDiscount(subtotal(items), code);
  return Math.round(sub * (1 + TAX_RATE) * 100) / 100;
}

module.exports = { subtotal, total, TAX_RATE };
