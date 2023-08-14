import React from 'react'
import './Navbar.css'
import logo from '../../assets/nav-logo.png'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <section className='nav-wrapper' id='navbar'>
      <div className='nav-container flexCenter innerWidth' style={{justifyContent: 'space-between' ,padding:'1.5rem'}}>
        <div className='logo'>
          <img src={logo} alt='logo'  width={150}/>
        </div>
        <div className='flexCenter nav-links'>
               <Link to='about' >About Us</Link>   
               <Link to='menu' >Menu</Link>
               <Link to='locations' >Locations</Link>
                <button className='button'>
                    <Link to='contact' >Contact Us</Link>
                </button>
            </div>
      </div>
    
    </section>
  )
}

export default Navbar
