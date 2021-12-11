import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Card from "@material-ui/core/Card";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { Wrapper } from "./OrdersQuantity.styles";
import { getTotalPrice } from "../../utils/total";
import useOrders from "../../hooks/OrdersHook"


const OrdersQuantity = () => {

  const {orders, setOrders, dataActiveMonth } = useOrders()

  const handleAddQuantity = (id) => {
    const updatedProducts = orders.map((o) => {
      return {
        ...o,
        compras: o.compras.reduce((acc, p) => {
          if (id === p.id) {
            p.quantity = p.quantity + 1;
          }

          return [...acc, { ...p }];
        }, []),
      };
    });
    localStorage.setItem("orders", JSON.stringify(updatedProducts));
    setOrders(updatedProducts);
  };

  const handleRemoveQuantity = (id) => {
    const updatedProducts = orders.map((o) => {
      return {
        ...o,
        compras: o.compras.reduce((acc, p) => {
          if (id === p.id) {
            p.quantity = p.quantity - 1;
          }

          return [...acc, { ...p }];
        }, []),
      };
    });

    localStorage.setItem("orders", JSON.stringify(updatedProducts));
    setOrders(updatedProducts);
  };

  const handleRemoveItem = (id) => {
    const removeProduct = orders.map((o) => {
      return {
        ...o,
        compras: o.compras.filter((compra) => compra.id !== id),
      };
    });
    localStorage.setItem("orders", JSON.stringify(removeProduct));
    setOrders(removeProduct);
  };

  return (
    <Wrapper>
      <div className="container">
        {orders.filter((o) => o.mes == dataActiveMonth).length === 0 ? (
          "Adicione produtos"
        ) : (
          <>
            {orders
              .filter((o) => o.mes == dataActiveMonth)
              .map((o) =>
                o.compras.map((p) => (
                  <div key={p.id} className="itens-bnt">
                    <Card>
                      <div className="itens">
                        <li>Produto: {p.produto}</li>
                        <li>Preço: {p.price} R$</li>
                        <li>Marca: {p.brand}</li>
                        <li>Quantidade: {p.quantity}</li>
                      </div>
                    </Card>

                    <div className="bnt">
                      <RemoveCircleOutlineIcon
                        onClick={() => handleRemoveQuantity(p.id)}
                      />

                      <DeleteOutlineIcon
                        fontSize="medium"
                        onClick={() => handleRemoveItem(p.id)}
                      />

                      <AddCircleOutlineIcon
                        onClick={() => handleAddQuantity(p.id)}
                      />
                    </div>
                  </div>
                ))
              )}
            <div className="precos">
              <div>
                <h2>preço total</h2>
                <p>
                  {getTotalPrice(
                    orders.filter((o) => o.mes == dataActiveMonth)
                  )}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default OrdersQuantity;
