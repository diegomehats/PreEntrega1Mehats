import { createContext, useState } from "react";
import { toast } from "react-toastify";

const CafeContext = createContext();

const CafeProvider = ({ children }) => {
  const [pedido, setPedido] = useState([]);

  const handleAgregarPedido = (producto) => {
    if (pedido.some((productoState) => productoState.title === producto.title)) {
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.title === producto.title ? producto : productoState
      );
      setPedido(pedidoActualizado);
      console.log("Pedido actualizado correctamente");
    } else {
      setPedido([...pedido, producto]);
      console.log("Pedido agregado correctamente");
      toast.success("pedido realizado");
    }
  };

  const eliminarProducto = (productoEliminar) => {
    const pedidoFiltrado = pedido.filter(
      (producto) => producto.title !== productoEliminar.title
    );
    setPedido(pedidoFiltrado);
    toast.error('se elimino el producto')
    
  };

  return (
    <CafeContext.Provider
      value={{
        handleAgregarPedido,
        eliminarProducto,
        pedido,
      }}
    >
      {children}
    </CafeContext.Provider>
  );
};

export { CafeProvider, CafeContext };
export default CafeContext;
