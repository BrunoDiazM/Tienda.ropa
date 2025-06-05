import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
