export async function getCategories() {
  try {
    const END_POINT = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(END_POINT);
    const categories = await response.json();
    return categories;
  } catch (err) {
    console.error(err);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const END_POINT = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(END_POINT);
    const productsList = await response.json();
    return productsList;
  } catch (err) {
    console.error(err);
  }
}

export async function getProductById(productId) {
  try {
    const END_POINT = `https://api.mercadolibre.com/items/${productId}`;
    const response = await fetch(END_POINT);
    const productData = await response.json();
    return productData;
  } catch (err) {
    console.error(err);
  }
}
