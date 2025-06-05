import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Inicio
      </Link>
      <Link to="/category/remeras" style={{ marginRight: "1rem" }}>
        Remeras
      </Link>
      <Link to="/category/pantalones" style={{ marginRight: "1rem" }}>
        Pantalones
      </Link>
      <Link to="/category/zapatillas">Zapatillas</Link>
    </nav>
  );
};

export default NavBar;
