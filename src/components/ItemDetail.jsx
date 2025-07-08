import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const handleAgregar = (cantidad) => {
    setCantidadAgregada(cantidad);
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", width: "300px" }}>
      <img src={item.image} alt={item.title} style={{ width: "100%" }} />
      <h2>{item.title}</h2>
      <p>${item.price}</p>
      <p>{item.description}</p>

      {cantidadAgregada > 0 ? (
        <p style={{ color: "green" }}>Producto agregado al carrito ✔️</p>
      ) : (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAgregar} />
      )}
    </div>
  );
};

export default ItemDetail;
