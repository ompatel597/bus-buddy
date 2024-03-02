import React from "react";
import error_img from "../../../app/assets/error.webp";

const Error = () => {
  return (
    <>
      <div className="error_page">
        <img src={error_img} width={690} height={690} alt="" />
      </div>
    </>
  );
};

export default Error;
