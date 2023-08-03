import notFaund from "../assets/img/error404quees.jpg";
import "../style/notFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2 className="notFound__h1"> No se encuentra esta página </h2>
      <img src={notFaund} alt="" />
    </div>
  );
};

export default NotFound;
