import { Routes, Route } from "react-router-dom";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:Id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
