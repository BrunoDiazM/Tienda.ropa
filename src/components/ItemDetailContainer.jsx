import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then(setItem);
  }, [itemId]);

  return (
    <div style={{ padding: "2rem" }}>
      {item ? <ItemDetail {...item} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
