import { Link } from "react-router-dom";

const Item = ({ id, name, price, image }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: 200 }}>
      <h4>{name}</h4>
      <img src={image} alt={name} style={{ width: "100%" }} />
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver más</Link>
    </div>
  );
};

export default Item;
