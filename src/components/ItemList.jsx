import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      {items.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;
