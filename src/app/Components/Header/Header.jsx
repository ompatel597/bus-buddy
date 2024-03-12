import React, { useEffect } from 'react'
import logo from "../../assets/BusBuddy-logo.png"
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import ProfileUser from "../../assets/profile_user.png"
import SecureLS from 'secure-ls'


const Header = () => {

  var ls = new SecureLS();
  const currentUser = ls.get('busbuddy_user_info'); 
  useEffect(()=>{
    const currentUser = ls.get('busbuddy_user_info'); 
    if(currentUser){
     
    }
   },[])

 const navigatrr = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();

  const cidUrl = searchParams.get("cid");

  const CidNavigate = () => {
    navigatrr(`/profile`)
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

              {currentUser ? <li style={{display: 'flex', gap: 4}}>
              <b> <img src={ProfileUser} style={{height: 19, fontWeight: 'bold'}}/> </b>
              <li style={{cursor: 'pointer', fontSize: 17, fontWeight: '550'}} onClick={CidNavigate}>Profile</li>
              </li> :<li> <Link to="/login" className='Routes-link nav-txt'>login</Link></li>}
              

             
            </ul>
            
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header