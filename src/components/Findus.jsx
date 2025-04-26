import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Findus = () => {
  return (
    <div>
      <div className="">
        <h2 className="font-semibold mb-3">Find Us On</h2>
        <div className="join  flex join-vertical *:bg-base-100">
          <button className="btn join-item justify-start"><FaFacebook/>Facebook</button>
          <button className="btn join-item justify-start"><FaTwitter/>Twitter</button>
          <button className="btn join-item justify-start"><FaInstagram/>Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default Findus;
