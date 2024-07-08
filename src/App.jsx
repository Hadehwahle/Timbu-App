import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Order from "./components/Order";
import NoMatch from "./components/NoMatch";
import Featured from "./pages/Featured";
import New from "./pages/New";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Details from "./pages/Details";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="footer" element={<Footer />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="details" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="order" element={<Order />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/checkout" element={<CheckOut />} />
        <Route path="details" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}
