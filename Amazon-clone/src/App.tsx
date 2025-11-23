import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Layout from "./layout/Layout";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
