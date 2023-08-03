import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "../components/Button";
import { formatPrice } from "../components/FormatPrice";
import Helmet from "../components/Helmets/Helmet";
import { PizzaContext } from "../provider/PizzaProvider";
import "../style/cart.css";

const Cart = () => {
  const { cart, total, increase, decrease } = useContext(PizzaContext);

  return (
    <Helmet title={"Cart"}>
      <section className="section-cart">
        <div className="section-cart__container">
          <div className="cart">
            {cart.length === 0 ? (
              <h2 className=" "> Ningún artículo en el carrito</h2>
            ) : (
              <>
                <Container>
                  <h2 className="cart-h2">Detalle del pedido:</h2>

                  <div className="">
                    {cart?.map((item, i) => (
                      <div key={i} className="cartContainer">
                        <div className="cart-left">
                          <div className="">
                            <img src={item.img} className="img-cart" />
                          </div>
                          <div className="cart-name">
                            <h5 className="text-capitalize">{item.name}</h5>
                          </div>
                        </div>
                        <div className="cart-right">
                          <p className="cart-right__p">
                            $ {formatPrice(item.count * item.price)}
                          </p>
                          <div className="cart-right-btn">
                            <Button
                              onClick={() => decrease(item.id)}
                              className="buttonCountRed"
                            >
                              -
                            </Button>
                            <p className=" count-p px-2">{item.count}</p>
                            <Button
                              onClick={() => increase(item.id)}
                              className="buttonCountBlue"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <h4 className="">Total:$ {formatPrice(total)}</h4>
                    <Button className="buttonPrice">Ir a Pagar</Button>
                  </div>
                </Container>
              </>
            )}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Cart;
