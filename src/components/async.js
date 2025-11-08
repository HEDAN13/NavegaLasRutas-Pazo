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
  const products = await getProducts();
  const product = products.find((prod) => prod.id == id);
  return product;
}

export async function getCategories() {
  const response = await getProducts();
  const categorias = response.map((item) => item.category);
  const categories = [...new Set(categorias)];
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
