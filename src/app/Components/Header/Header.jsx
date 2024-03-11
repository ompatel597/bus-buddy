import React from 'react'
import logo from "../../assets/BusBuddy-logo.png"
import { Link, useNavigate, useSearchParams } from 'react-router-dom'



const Header = () => {
 const navigatrr = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();

  const cidUrl = searchParams.get("cid");

  const CidNavigate = () => {
    navigatrr(`/profile?cid=${cidUrl}`)
  }

  return (
    <>
    
    <nav>
      <div className='navbar'>
        <div className='nav_logo'>
          <img src={logo} alt="busbuddy" />
        </div>

        <div className='nav_links'>
            <ul>
              <li> < Link to="/contactus" className='Routes-link nav-txt'>Contact us</Link> </li>
              <li> <Link to="/login" className='Routes-link nav-txt'>Log in</Link></li>
              <b><li style={{cursor: 'pointer'}} onClick={CidNavigate}>Profile</li></b>
            </ul>
            
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header