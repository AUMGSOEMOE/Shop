import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className=" text-2xl font-semibold ">MMS-IT SHOPPING</h1>
        <div>
          <button className="border relative border-black px-3 py-1">
            My Cart
            <span className="px-2 absolute text-xs text-white -translate-y-1/2  bg-red-500">
              1
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
