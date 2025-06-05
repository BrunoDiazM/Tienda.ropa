import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    asyncFunc(categoryId).then((response) => {
      setItems(response);
    });
  }, [categoryId]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Catálogo de Productos</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
