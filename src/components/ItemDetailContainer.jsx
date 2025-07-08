import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setItem({ id: res.id, ...res.data() });
        } else {
          console.log("No se encontró el producto");
        }
      })
      .catch((err) => console.error("Error al cargar detalle:", err))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando detalle del producto...</p>;
  if (!item) return <p>Producto no encontrado.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
