import React, { useState } from "react";
import AddQuantity from "../AddQuantity/AddQuantity";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Wrapper } from "./AddNewProduct.styles";

const AddNewProduct = ({ dataActiveMonth }) => {
  const dadosLocalStorage = JSON.parse(localStorage.getItem("orders") || "[]");

  const [orders, setOrders] = useState(dadosLocalStorage);

  const [addProduct, setAddProduct] = useState({});

  const addNewProduct = () => {
    const id = new Date().getTime();

    const newProduct = {
      id,
      ...addProduct,
      quantity: 1,
    };

    const monthExists = orders.find((o) => o.mes == dataActiveMonth);

    let orderSave = [];

    if (!monthExists) {
      orderSave = [
        ...orders,
        {
          mes: dataActiveMonth,
          compras: [newProduct],
        },
      ];
    }

    if (monthExists) {
      orderSave = orders.map((o) => {
        if (o.mes == dataActiveMonth) {
          o.compras = [...o.compras, newProduct];
        }
        return o;
      });
    }

    localStorage.setItem("orders", JSON.stringify(orderSave));
    setOrders(orderSave);
  };

  const handleChange = ({ target }) => {
    setAddProduct({ ...addProduct, [target.name]: target.value });
  };

  return (
    <>
      <AddQuantity
        setOrders={setOrders}
        orders={orders}
        dataActiveMonth={dataActiveMonth}
      />

      <Wrapper>
        <div className="novo-produto">
          <TextField
            id="outlined-basic"
            label="Produto"
            variant="outlined"
            type="text"
            name="produto"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Preço"
            variant="outlined"
            type="text"
            name="price"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="marca"
            variant="outlined"
            type="text"
            name="brand"
            onChange={handleChange}
          />
          <div className="button">
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            color="primary"
            onClick={addNewProduct}
          >
            adicionar
          </Button>
          </div>
          
        </div>
      </Wrapper>
    </>
  );
};

export default AddNewProduct;
