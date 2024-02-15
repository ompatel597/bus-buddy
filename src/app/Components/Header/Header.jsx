import React from 'react'
import logo from "../../assets/logo.png"



const Header = () => {
  return (
    <div className='navbar'>
        <nav className="nav">
            <img src={logo} alt="" />
            <a href="#">Login</a>
        </nav>
    </div>
  )
}

export default Header