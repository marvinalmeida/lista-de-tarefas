import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Compras from "./pages/Compras/Compras";
import Contas from "./pages/Contas/Contas";
import Extras from "./pages/Extras/Extras";
import Home from "./pages/Home/Home";
import Mes from "./pages/Mes/Mes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mes" component={Mes} />
        <Route path="/compras" component={Compras} />
        <Route path="/contas" component={Contas} />
        <Route path="/extras" component={Extras} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
