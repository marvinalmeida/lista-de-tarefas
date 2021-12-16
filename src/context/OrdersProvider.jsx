import React, { useState, createContext } from 'react'

const OrdersContext = createContext()

const OrdersProvider = ({children}) => {
    const dadosLocalStorage = JSON.parse(localStorage.getItem("orders") || "[]");

    const [orders, setOrders] = useState(dadosLocalStorage);
  
    const [addProduct, setAddProduct] = useState({});

    const { pathname } = window.location

    const dataActiveMonth = pathname.split("/")[2];

    return (
        <OrdersContext.Provider value={{
            orders,
            setOrders,
            addProduct,
            setAddProduct,
            dataActiveMonth
        }}>
            {children}
        </OrdersContext.Provider>
        
    )
}

export {OrdersContext}

export default OrdersProvider;
