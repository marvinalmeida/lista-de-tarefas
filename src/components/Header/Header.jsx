import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Header.styles";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const Header = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="h1-svg">
          <h1>lista de tarefas</h1>
          <ListAltIcon fontSize="large" color="primary" />
        </div>

        <nav className="menu">
          <ul>
            <li>
              <Link to="/">
                <span className="svg-text">
                  <HomeIcon fontSize="medium" color="primary" />
                  <p>Home</p>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/compras">
                <span className="svg-text">
                  <ShoppingCartIcon fontSize="medium" color="primary" />
                  <p>Compras</p>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contas">
                <span className="svg-text">
                  <MonetizationOnIcon fontSize="medium" color="primary" />
                  <p>Contas</p>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/extras">
                <span className="svg-text">
                  <CheckBoxIcon fontSize="medium" color="primary" />
                  <p>Extras</p>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Header;
