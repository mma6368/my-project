import React, { useState } from 'react'
import Logo from '../assets/WebsiteLogo.jpg';
import { ShoppingCart } from "phosphor-react";
import { Link } from 'react-router-dom';
import "./navbar.css";

export const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false)
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='rightSide'>
        <Link to="/">Home</Link>
            <Link to="/product"> Product </Link>
            <Link to="/cart">
            <ShoppingCart size={30} />
            </Link>
            <Link to="/checkout"> Checkout </Link>
        </div>
    </div>
  )
}











