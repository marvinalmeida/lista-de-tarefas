import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const Compras = () => {
  return (
    <Layout>
      <Link to="/mes/janeiro">janeiro</Link>
      <Link to="/mes/fevereiro">fevereiro</Link>
    </Layout>
  );
};

export default Compras;
