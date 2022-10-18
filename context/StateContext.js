import React, { useState, useEffect, createContext, useContext } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        // When specific item already exists in the cart
        if (checkProductInCart) {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
            setTotalQty((prevTotalQuantity) => prevTotalQuantity + quantity);
        
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
                }
            })
            setCartItems(updatedCartItems);
        } // when add new item to the cart
        else {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
            setTotalQty((prevTotalQuantity) => prevTotalQuantity + quantity);

            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
        }
        toast.success(`${qty} ${product.name} added to the cart!`);
    }

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

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((item) => item._id !== product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQty(prevTotalQty => prevTotalQty - foundProduct.quantity)
        setCartItems(newCartItems)
    }

    const toggleCartItemQty = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id) 
        const newCardItems = cartItems;

        if (value === 'inc') {
            // setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1}])
            newCardItems.map((item) => (item._id === id) && (item.quantity = foundProduct.quantity + 1));
            setCartItems([...newCardItems]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQty(prevTotalQuantity => prevTotalQuantity + 1)
        } else if (value === 'dec') { 
            if (foundProduct.quantity > 1) {
                // setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
                newCardItems.map((item) => (item._id === id) && (item.quantity = foundProduct.quantity - 1));
                setCartItems([...newCardItems]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQty(prevTotalQuantity => prevTotalQuantity - 1)
            }
        }
    }

    return (
        <Context.Provider value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQty,
            qty,
            increaseQty,
            decreaseQty,
            onAdd,
            toggleCartItemQty,
            onRemove
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);

