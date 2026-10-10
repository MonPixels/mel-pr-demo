// Cart checkout helpers

const TAX_RATE = 0.07;

function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function total(items) {
  const sub = subtotal(items);
  return Math.round(sub * (1 + TAX_RATE) * 100) / 100;
}

module.exports = { subtotal, total, TAX_RATE };
