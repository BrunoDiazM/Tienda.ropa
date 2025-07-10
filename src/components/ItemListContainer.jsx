import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((res) => {
        const productos = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(productos);
      })
      .catch((error) => {
        console.error("Error al traer productos", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Catálogo de Productos</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
