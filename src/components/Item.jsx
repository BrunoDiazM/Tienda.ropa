import { Link } from "react-router-dom";

const Item = ({ id, title, price, image }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ objectFit: "cover", height: "250px" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}</h5>
          <p className="card-text fw-bold">${price}</p>
          <Link to={`/item/${id}`} className="btn btn-primary mt-auto">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
