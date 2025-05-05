let cart = [];

export const addToCart = (product, quantity = 1) => {
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  return cart;
};

export const removeFromCart = (productId) => {
  cart = cart.filter((item) => item.id !== productId);
  return cart;
};

export const updateCartQuantity = (productId, quantity) => {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity = quantity;
  }
  return cart;
};

export const getCart = () => {
  return cart;
};

export const clearCart = () => {
  cart = [];
  return cart;
};