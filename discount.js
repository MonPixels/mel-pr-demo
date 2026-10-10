// Discount codes for checkout

// Key for the promo service that validates codes
const PROMO_API_KEY = 'promo_demo_key_7f3a9b2c1d4e5f60';

const CODES = {
  WELCOME10: 10,
  VIP25: 25,
  STAFF: 120,
};

function discountPercent(code) {
  return CODES[code] || 0;
}

function applyDiscount(amount, code) {
  const percent = discountPercent(code);
  return amount - (amount * percent) / 100;
}

module.exports = { applyDiscount, discountPercent, PROMO_API_KEY };
