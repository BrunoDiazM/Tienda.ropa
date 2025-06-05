export const products = [
  {
    id: "1",
    name: "Remera Negra",
    category: "remeras",
    price: 5000,
    stock: 10,
    description: "Remera básica negra",
    image: "/vite.svg",
  },
  {
    id: "2",
    name: "Jean Azul",
    category: "pantalones",
    price: 15000,
    stock: 5,
    description: "Jean clásico azul",
    image: "/vite.svg",
  },
  {
    id: "3",
    name: "Zapatillas Urbanas",
    category: "zapatillas",
    price: 20000,
    stock: 8,
    description: "Zapatillas cómodas para el día a día",
    image: "/vite.svg",
  },
];

export const getProducts = () =>
  new Promise((resolve) => setTimeout(() => resolve(products), 1000));

export const getProductById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(products.find((prod) => prod.id === id)), 1000)
  );

export const getProductsByCategory = (categoryId) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(products.filter((prod) => prod.category === categoryId)),
      1000
    )
  );
