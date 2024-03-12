import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Profile = () => {
  const bnavigate = useNavigate()
  const [first, setfirst] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  const cidUrl = searchParams.get("cid");

  useEffect(() => {
    async function getData() {
      try {
        const ress = await fetch(
          "https://busbooking.bestdevelopmentteam.com/Api/displayuser.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              cid: cidUrl,
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
      bnavigate(`/history?cid=${cidUrl}`)
    }, 200);
  }
  return (
    <>
      <h2 className="Profile-head"> &nbsp;&nbsp;&nbsp;User Profile</h2>
      <hr className="Profile-line" />
      <div className="Profile-user">
        <div className="Profile-data">
          <p>
            <b>Name:</b> {first.name}
          </p>
          <p>
            <b>Phone no:</b> {first.mobile}
          </p>
          <p>
            <b>email:</b> {first.email}
          </p>
      <button onClick={HistoryNavigate} className="history-btn">Ticket history</button>
      <button className="sign-out-btn" style={{fontSize: 24}}>Sign Out <i className="fa fa-sign-out"></i></button>
        </div>
      </div>
    </>
  );
};

export default Profile;
