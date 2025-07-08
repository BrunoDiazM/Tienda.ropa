import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const CheckoutForm = () => {
  const { carrito, total, vaciarCarrito } = useCart();
  const [orderId, setOrderId] = useState("");
  const [userData, setUserData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: userData,
      items: carrito.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.cantidad, // 👈 importante que coincida
      })),
      total: total,
      date: new Date(),
    };

    try {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");

      const { id } = await addDoc(ordersCollection, order);
      setOrderId(id);
      vaciarCarrito();
    } catch (error) {
      console.error("Error al generar orden:", error);
    }
  };

  if (orderId) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}>
      <h2>Finalizar compra</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        value={userData.nombre}
        required
      />
      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        onChange={handleChange}
        value={userData.telefono}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={userData.email}
        required
      />
      <button type="submit">Confirmar orden</button>
    </form>
  );
};

export default CheckoutForm;
