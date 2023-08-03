import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../provider/PizzaProvider";
import { useContext } from "react";
import { formatPrice } from "../components/FormatPrice";
import "../style/product-card.css";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { addCart } = useContext(PizzaContext);
  return (
    <Col lg="3" md="6" className="mb-2">
      <div className="product__item">
        {/* <div className="producto-img"> */}
        <motion.img whileHover={{ scale: 0.9 }} src={item.img} alt="" />
        {/* </div> */}
        <div className="p-2 product__info">
          <div className="product__border">
            <h3 className="product__name text-capitalize">{item.name}</h3>
          </div>
          <h6 className="product__h6">Ingredientes:</h6>
          {item.ingredients.map((ingredient, i) => (
            <li key={i} className="capitalize ">
              <pre className="">🍕 </pre> {ingredient}
            </li>
          ))}
        </div>
        <div className="product__price">
          <span className="price">${formatPrice(item.price)}</span>
        </div>
        <div className="container-btn">
          <Button
            type="submit"
            className="buttonVer button-margen"
            children="ver mas👀"
            onClick={() => navigate(`/pizza/${item.id}`)}
          />

          <Button
            type="submit"
            className="buttonCart "
            children="Añadir 🛒"
            onClick={() => addCart(item.id)}
          />
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
