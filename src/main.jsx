import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaProvider from "./provider/PizzaProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PizzaProvider>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={1000}
        closeOnClick
        pauseOnHover={false}
      />
      <App />
    </PizzaProvider>
  </BrowserRouter>
);
