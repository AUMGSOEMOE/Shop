import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="mt-auto">
      <div className="bg-black text-center text-white">
        {date.getFullYear()} MMS-IT.All Deserved Service
      </div>
    </div>
  );
};

export default Footer;
