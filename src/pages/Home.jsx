import Helmet from "../components/Helmets/Helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductsList from "../product/ProductList";
import Header from "../components/Header";

const Home = () => {
  return (
    <Helmet title={"Home"}>
      <Header />
      <section className="popular__category mt-5">
        <Container>
          <Row>
            <ProductsList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
