import "../style/navbar.css";
import { Container, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { BsCart4 } from "react-icons/bs";
import { PizzaContext } from "../provider/PizzaProvider";
import { formatPrice } from "./FormatPrice";

const Navbar = () => {
  const { total } = useContext(PizzaContext);
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  return (
    <div className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo" onClick={() => navigate("/")}>
              🍕
              <div>
                <h1>Pizzeria Mamma Mia!</h1>
              </div>
            </div>

            <div className="nav__icons">
              <NavLink to={"/cart"}>
                <BsCart4 className="icon" />
              </NavLink>
              <p className="nav__icons-p">$ {formatPrice(total)}</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
