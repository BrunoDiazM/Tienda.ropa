import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, vaciarCarrito, total } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      {carrito.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} x {item.cantidad}
          </p>
          <p>Subtotal: ${item.price * item.cantidad}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
