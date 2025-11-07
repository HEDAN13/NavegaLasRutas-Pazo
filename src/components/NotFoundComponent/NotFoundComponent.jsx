import "./NotFoundComponent.css";
import { FlagTriangleLeft, FlagTriangleRight, House } from "lucide-react";
import { useNavigate } from "react-router";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function NotFoundComponent() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="notfound-container">
      <FlagTriangleLeft size={200} color="red" />
      <span className="notfound-number">404</span>
      <FlagTriangleRight size={200} color="red" />
      <h2 className="notfound-title">Página no encontrada</h2>
      <ButtonPrimary onClick={navigateHome}>
        <House />
        Volvamos a casa
      </ButtonPrimary>
    </div>
  );
}
