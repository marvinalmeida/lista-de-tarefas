import React from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const Compras = () => {
  return (
    <Layout>
      <div className="link">
        <Link to="/mes/janeiro">janeiro</Link>
        <Link to="/mes/fevereiro">fevereiro</Link>
      </div>
    </Layout>
  );
};

export default Compras;
