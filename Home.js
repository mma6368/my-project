import React from "react";
import { Link } from 'react-router-dom';
import BannerImage from '../assets/BackgroundIMG.jpg';
import '../pages/Home.css';
export const Home = () => {
    return (
        <div className='home'style={{ backgroundImage: `url(${BannerImage})`}}> 
        <div 
            className='headerContainer'           >
            <h1>A'vere</h1>
            <p>Fashion For Any Taste</p>
            <Link to='/product'>
                <button>Shop Now</button>
            </Link>
        </div>
    </div>
    );
  };