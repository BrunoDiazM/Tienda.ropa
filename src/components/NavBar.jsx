import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🛍 Tienda Ropa
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/remeras">
                Remeras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/pantalones">
                Pantalones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/zapatillas">
                Zapatillas
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="btn btn-outline-light">
            <CartWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
