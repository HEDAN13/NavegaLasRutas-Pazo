import { useEffect, useState } from "react";
import "./CategoryListMenu.css";
import { getCategories } from "../async";

export default function CategoryListMenu() {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("Categorias");

  useEffect(() => {
    const fetchCat = async () => {
      const categories = await getCategories();
      setCategorias(categories);
    };
    fetchCat();
  }, []);

  const handleChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  return (
    <div className="select-wrapper">
      <select
        name="categorias"
        id="categorias"
        className="categoria-select"
        value={categoriaSeleccionada}
        onChange={handleChange}
      >
        <option value="">Categorias</option>
        {categorias.map((categoria, index) => {
          return (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          );
        })}
      </select>
    </div>
  );
}
