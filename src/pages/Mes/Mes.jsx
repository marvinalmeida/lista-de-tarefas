import React from "react";
import AddNewProduct from "../../components/AddNewProduct/AddNewProduct";
import Layout from "../../components/Layout/Layout";
import useOrders from "../../hooks/OrdersHook";

const Mes = () => {

  const { dataActiveMonth } = useOrders()

  return (
    <>
      <Layout>
        <h2>Mês: {dataActiveMonth}</h2>
        <AddNewProduct/>
      </Layout>
    </>
  );
};

export default Mes;
