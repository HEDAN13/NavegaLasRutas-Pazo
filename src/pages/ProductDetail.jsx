import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const products = await response.json();
        const productFind = products.find((product) => product.id == productId);
        setProduct(productFind);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId]);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
