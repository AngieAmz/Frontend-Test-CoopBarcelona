import React from 'react'
import './navbar.css'
import { FiMenu } from 'react-icons/fi'
import logo from '../../assets/logo.svg'

function NavBar() {
  return (
    <div className='nav'>
      <input type="checkbox" name="" id="chk1"/>
        <div className="logo">
          <img src={logo} alt='logo'/>
        </div>
        <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Services</a></li>
        </ul>
        <div className="menu">
            <label htmlFor="chk1">
                <FiMenu className='icon'/>
            </label>
        </div>
    </div>
  )
}

export default NavBar
