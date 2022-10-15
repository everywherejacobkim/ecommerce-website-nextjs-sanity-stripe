import React, { useState, useEffect, createContext, useContext } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQty, setTotalQty] = useState();
    const [qty, setQty] = useState(1);

    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQty,
            qty
        }}>
            {children}
        </Context.Provider>
    )
}

export default StateContext;
