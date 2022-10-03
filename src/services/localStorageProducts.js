export const getProductsFromLocalStorage = () => JSON
  .parse(localStorage.getItem('shoppingCartStorage'));

export const setProductsToLocalStorage = (item) => localStorage
  .setItem('shoppingCartStorage', JSON.stringify(item));

export const setRatingsToLocalStorage = (item) => localStorage
  .setItem('ratingsStorage', JSON.stringify(item));

export const getRatingsFromLocalStorage = () => JSON
  .parse(localStorage.getItem('ratingsStorage'));
