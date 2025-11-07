import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NotFoundComponent from "./components/NotFoundComponent/NotFoundComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="Bienvenidos a la Landing" />}
          />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
