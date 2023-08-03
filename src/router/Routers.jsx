import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PizzaDetails from "../pages/PizzaDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id" element={<PizzaDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
