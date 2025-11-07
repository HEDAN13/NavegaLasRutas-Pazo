import "./ButtonPrimary.css";

export default function ButtonPrimary({ children, onClick }) {
  return (
    <button onClick={onClick} className="buttonPrimary">
      {children}
    </button>
  );
}
