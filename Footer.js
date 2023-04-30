import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../pages/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon /> <FacebookIcon />
        </div>
        <p>&copy; 2023 A'vere.com</p>
    </div>
  )
}

export default Footer