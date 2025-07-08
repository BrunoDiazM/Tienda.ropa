import { createContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];
    const itemExistente = nuevoCarrito.find(
      (prod) => prod.id === itemAgregado.id
    );

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }

    setCarrito(nuevoCarrito);
  };

  const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  const total = carrito.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadTotal,
        total,
        vaciarCarrito,
      }}>
      {children}
    </CartContext.Provider>
  );
};
