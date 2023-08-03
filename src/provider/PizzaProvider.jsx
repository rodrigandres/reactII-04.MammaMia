import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzasData, setPizzasData] = useState([]);

  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./pizzas.json");
        const data = await response.json();
        setPizzasData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const addCart = (id) => {
    const pizza = pizzasData.find((x) => x.id === id);
    setTotal(total + pizza.price);

    const searchCart = cart.findIndex((x) => x.id === id);
    toast.success("Se agrego una pizza al carrito");
    if (searchCart >= 0) {
      cart[searchCart].count++;
      setCart([...cart]);
    } else {
      const newObject = {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        count: 1,
      };
      setCart([...cart, newObject]);
    }
  };

  const increase = (id) => {
    const searchCart = cart.findIndex((x) => x.id === id);
    if (searchCart >= 0) {
      cart[searchCart].count++;
      setCart([...cart]);
      setTotal(total + cart[searchCart].price);
    } else {
      console.log("error");
    }
  };

  const decrease = (id) => {
    const searchCart = cart.findIndex((x) => x.id === id);
    if (cart[searchCart].count === 1) {
      setTotal(total - cart[searchCart].price);
      cart.splice(searchCart, 1);
    } else {
      setTotal(total - cart[searchCart].price);
      cart[searchCart].count--;
      setCart([...cart]);
    }
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzasData,
        setPizzasData,
        cart,
        total,
        addCart,
        increase,
        decrease,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
