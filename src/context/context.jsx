import React, { createContext, useState } from "react";
export const contexto = createContext([]);
const { Provider } = contexto;

const Customprovider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = (details, count) => {
    if (isInCart(details.id)) {
      const index = items.indexOf(items.find((item) => item.id === details.id));
      const aux = [...items];
      aux[index].cantidad += count;
      setItems(aux);
    } else {
      details.cantidad = count;
      setItems([...items, details]);
    }
  };

  const deleteItem = (id) => {
    const aux = [...items];
    aux.splice(aux.indexOf(aux.find((item) => item.id === id)), 1);
    setItems(aux);
  };
  const isInCart = (id) => {
    return items.find((item) => item.id === id) !== undefined ? true : false;
  };
  const clear = () => {
    setItems([]);
  };
  const getCantItems = () => {
    var cant = 0;
    items.forEach((item) => {
      cant += item.cantidad;
    });
    return cant;
  };

  const getPrecioTotal = () => {
    var precioTotal = 0;
    items.forEach((item) => {
      var cantidad = item.cantidad;
      for (let index = 0; index < cantidad; index++) {
        precioTotal += item.precio;
      }
    });
    return precioTotal;
  };
  const updateCantItem = (id, count) => {
    const index = items.indexOf(items.find((item) => item.id === id));
    const aux = [...items];
    aux[index].cantidad = count;
    setItems(aux);
  };
  return (
    <Provider
      value={{
        items,
        addItem,
        deleteItem,
        getCantItems,
        clear,
        getPrecioTotal,
        updateCantItem,
      }}
    >
      {children}
    </Provider>
  );
};
export default Customprovider;
