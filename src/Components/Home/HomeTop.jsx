import React from "react";
import Hommee from "../Images/Hommee.jpg";

function HomeTop() {
  return (
    <div className="relative">
      <div className="w-full-top-img  ">
        <img className="w-md-top-img" src={Hommee} alt="Fusion Furnish" />
      </div>

      <div className="w-fulll">
        <p className="w-fulll-1">LuxeLiving Furniture</p>
        <h2 className="w-fulll-2">
          <b>WE PRODUCE LUXURIOUS FURNITURE</b>
        </h2>
      </div>
      <div className="absolute inset-0 bg-gray-700 opacity-50">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default HomeTop;
