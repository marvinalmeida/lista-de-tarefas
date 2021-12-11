import React, { useContext } from "react";
import { OrdersContext } from "../context/OrdersProvider"

const useOrders = () => {

    const orders = useContext(OrdersContext)

    return orders 
}

export default useOrders;