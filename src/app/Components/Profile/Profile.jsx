import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
  const [waitt, setwaitt] = useState();

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
        const responces = await ress.json();
        setwaitt(responces);
        console.log(responces);
      } catch {
        console.log("errr");
      }
    }
    getData();
  }, []);
  return (
    <>
      {waitt?.userProfile?.map((k) => (
        <div className="Profile-data">
          <p> {k.userProfile.name} </p>
        </div>
      ))}
    </>
  );
};

export default Profile;
