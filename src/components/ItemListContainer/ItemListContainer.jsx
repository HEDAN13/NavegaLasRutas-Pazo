import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../async.js";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productos = await getProducts();
      setProducts(productos);
    };
    fetchData();
  }, []);

  return (
    <div className="itemList-container">
      {products.map((product) => {
        return <ItemDetail key={product.id} product={product} />;
      })}
    </div>
  );
}
