export async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductById(id) {
  const response = await getProducts();
  const products = await response.json();
  const product = products.find((prod) => prod.id == id);
  return product;
}

export async function getCategories() {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return categories;
}

export async function getProductByCategory(category) {
  const response = await getProducts();
  const products = await response.json();
  const productsByCategory = products.filter(
    (prod) => prod.category === category
  );
  return productsByCategory;
}
