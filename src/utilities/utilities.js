const getCartLS = () => {
  const cartItems = localStorage.getItem('purchased-course');
  return cartItems ? JSON.parse(cartItems) : {};
}

const setCartLS = (data) => localStorage.setItem('purchased-course', JSON.stringify(data));


export { getCartLS, setCartLS };