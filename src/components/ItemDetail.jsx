import ItemCount from "./ItemCount";

const ItemDetail = ({ name, description, price, stock, image }) => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <img src={image} alt={name} style={{ width: 250 }} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <ItemCount
          stock={stock}
          initial={1}
          onAdd={(cantidad) => alert(`Agregaste ${cantidad} al carrito`)}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
