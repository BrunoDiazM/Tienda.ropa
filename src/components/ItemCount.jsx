import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
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
        <button onClick={decrementar} disabled={cantidad <= 1}>
          -
        </button>
        <span>{cantidad}</span>
        <button onClick={incrementar} disabled={cantidad >= stock}>
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(cantidad)}
        disabled={stock === 0}
        style={{ marginBottom: "0.5rem" }}>
        Agregar al carrito
      </button>

      {stock === 0 && <p style={{ color: "red" }}>Sin stock disponible</p>}
    </div>
  );
};

export default ItemCount;
