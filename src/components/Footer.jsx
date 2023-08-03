import "../style/footer.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" footer">
      <Container>
        <Row>
          <Col lg="5" md="12" className="mb-4">
            <div className="footer__quick-links">
              <h1 className="footer__h1"> 🍕 ¡Pizza Mamma Mia!</h1>
            </div>

            <p className="footer__text mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              reiciendis neque fugit, nam ullam rem perferendis minima nihil
              asperiores ea!
            </p>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <div className="footer__quick-links">
              <h4 className=" quick__links-title"> Enlaces útiles</h4>
              <ListGroup className="mb-3">
                <ListGroup.Item className="ps-0 border-0 ">
                  <Link to={"/"}>Pizza</Link>
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 border-0 d-flex ">
                  <Link to={"/cart"}>Cart</Link>
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="footer__quick-links">
              <h4 className=" quick__links-title"> Contacto</h4>
              <ListGroup className="footer__contact">
                <ListGroup.Item className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span className="footer__span">
                    <BiMap />
                  </span>
                  <p className="footer__p">123 Santiago centro, Chile</p>
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span className="footer__span">
                    <AiOutlinePhone />
                  </span>
                  <p className="footer__p">+543698789</p>
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span className="footer__span">
                    <MdOutlineEmail />
                  </span>
                  <p className="footer__p">mammamia@gmail.com</p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">Copyright {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
