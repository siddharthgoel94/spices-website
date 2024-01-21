import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../../../assets/logo-new.png';
import profile  from '../../../assets/profile.svg'
import heart  from '../../../assets/heart.svg'
import search  from '../../../assets/search.svg'
import cart  from '../../../assets/cart.svg'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  useEffect(() => { 
    // Close the menu by default when the component mounts
    setShowMenu(true);
    document.body.classList.remove('showMenu'); // Remove 'showMenu' class
  }, []);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

   

    return () => {
      document.removeEventListener('click', closeMenu);
    }
  }, [])
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle('showMenu', showMenu);
  }

  return (
    <div className='navbar'>
      <div className="nav-left">
       <a href='/'> <img src={logo} height={70} width={100} alt="the logo" /></a>
      </div>
      <div className="nav-middle">
       
        <ul className='nav-middle-list'>
         
        <Link to='/'><li>Home </li></Link>
        <Link to='/recipes'><li>Recipes </li></Link>
        <Link to='/products'><li>Our products </li></Link>
        <Link to='/contact-us'><li>Contact Us </li></Link>
        
        

        </ul>
      </div>
      <div className="nav-right">
      <img src={search} alt="search button" />
      <img src={heart} alt="search button" />
      <img src={cart} alt="search button" />
      <img src={profile} alt="search button" />

      </div>


      <div className="hamburger" onClick={toggleMenu} ref={menuRef}>
        {/* <img src={HamburgerIcon} alt="Hamburger icon" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
  <path d="M2.33496 21.461H32.7595M2.33496 12.0638H32.7595M2.33496 2.66664H16.5331H32.7595" stroke="#faaf25" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <div className={` ${showMenu?'showMobMenu':'myMobMenu'} `}>
          {/* this is mobile view navbar */}
          <Link onClick={toggleMenu} to="/" activeClass='active' className="mobItem"><span className='navLink'>Home</span></Link>
          <Link onClick={toggleMenu} to="/products"  activeClass='active' className="mobItem">Our Products</Link>
          <Link onClick={toggleMenu} to="/recipes" activeClass='active'  className="mobItem">Recipes</Link>
        
          <Link onClick={toggleMenu} to="/contact-us" activeClass='active' className="mobItem">Contact Us</Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
