import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div>
      🛒
      {cantidadTotal > 0 && (
        <span className="badge bg-success ms-2">{cantidadTotal}</span>
      )}
    </div>
  );
};

export default CartWidget;
