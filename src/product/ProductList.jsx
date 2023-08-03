import { useContext } from "react";
import { PizzaContext } from "../provider/PizzaProvider";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { pizzasData } = useContext(PizzaContext);

  return (
    <>
      {pizzasData?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
};

export default ProductsList;
