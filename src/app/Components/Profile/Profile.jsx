import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SecureLS from "secure-ls";

const Profile = () => {
  const bnavigate = useNavigate()
  const [first, setfirst] = useState("loading");

  var ls = new SecureLS();
  const currentUser = ls.get('busbuddy_user_info'); 

  useEffect(() => {
    async function getData() {
      try {
        const ress = await fetch(
          "https://busbooking.bestdevelopmentteam.com/Api/displayuser.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              cid: currentUser.cid,
            }),
          }
        );
        const Respo = await ress.json();
        setfirst(Respo.userProfile);
      } catch {
        console.log("errr");
      }
    }
    getData();
  }, []);

  const HistoryNavigate = () => {
    setTimeout(() => {
      bnavigate(`/history`)
    }, 200);
  }

  const LogOut = () => {
    bnavigate("/")
    ls.remove('busbuddy_user_info'); 
  }
  return (
    <>
      <h2 className="Profile-head"> &nbsp;&nbsp;&nbsp;User Profile</h2>
      <hr className="Profile-line" />
      <div className="Profile-user">
        {first === "loading" ? <div style={{display: 'flex', margin: 'auto', marginTop: 20}} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
        <div className="Profile-data">
          <p>
            <b>Name:</b> {first?.name}
          </p>
          <p>
            <b>Phone no:</b> {first?.mobile}
          </p>
          <p>
            <b>email:</b> {first?.email}
          </p>
      <button onClick={HistoryNavigate} className="history-btn">Ticket history</button>
      <button onClick={LogOut}  className="sign-out-btn" style={{fontSize: 24}}>Sign Out <i className="fa fa-sign-out"></i></button>
      <br />
      <br />
      <li  style={{fontSize: 15}}> <Link to="/forgetpass" className='Routes-link nav-txt'>Reset password ?</Link></li>
        </div>
        }
      </div>
    </>
  );
};

export default Profile;
