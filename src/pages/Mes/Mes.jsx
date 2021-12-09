import React from "react";
import { useLocation } from "react-router-dom";
import AddNewProduct from "../../components/AddNewProduct/AddNewProduct";
import Layout from "../../components/Layout/Layout";

const Mes = () => {

  const { pathname } = useLocation();

  const dataActiveMonth = pathname.split("/")[2];

  return (
    <>
      <Layout>
        <h2>{dataActiveMonth}</h2>
        <AddNewProduct dataActiveMonth={dataActiveMonth} />
      </Layout>
    </>
  );
};

export default Mes;
