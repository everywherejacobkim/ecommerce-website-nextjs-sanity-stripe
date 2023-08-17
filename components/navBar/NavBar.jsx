import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "../cart/Cart";
import { useStateContext } from "../../context/StateContext";

const NavBar = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="navbar-logos">
        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/images/logo1.jpg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="navbar-title">Urban Teescape</div>
      </div>
      <button
        type="button"
        className="cart-icon"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQty}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default NavBar;
