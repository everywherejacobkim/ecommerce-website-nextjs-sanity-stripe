import React, { useState, useEffect, createContext, useContext } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQty, setTotalQty] = useState();
    const [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty((prevQty) => (
            prevQty + 1
        ));
    }

    const decreaseQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) {
                return 1;
            }
            return prevQty - 1
        })
    }

    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQty,
            qty,
            increaseQty,
            decreaseQty,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);

