export const getProductsFromLocalStorage = () => JSON
  .parse(localStorage.getItem('shoppingCartStorage'));

export const setProductsToLocalStorage = (item) => localStorage
  .setItem('shoppingCartStorage', JSON.stringify(item));
