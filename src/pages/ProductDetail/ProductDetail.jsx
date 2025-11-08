import "./ProductDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../components/async";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const producto = await getProductById(productId);
      setProduct(producto);
    };
    fetchData();
  }, [productId]);

  return (
    <div>
      <div id="carouselProducts" className="carousel slide">
        <div className="carousel-inner">
          {product?.images?.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image}
                alt={`${product.title} ${index}`}
                className="dblock w-70"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselProducts"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselProducts"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
