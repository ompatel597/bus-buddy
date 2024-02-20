import React from 'react'
import logo from "../../assets/BusBuddy-logo.png"



const Header = () => {
  return (
    <>
    
    <nav>
      <div className='navbar'>
        <div className='nav_logo'>
          <img src={logo} alt="busbuddy" />
        </div>

        <div className='nav_links'>
            <ul>
              <li>Contact Us</li>
              <li>Log in</li>
            </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header