import React from "react";
import ContainerComponent from "./Container.component";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ContainerComponent>
      <div className=" mb-4">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <h1 className=" text-2xl font-semibold ">MMS-IT SHOPPING</h1>
          </Link>
          <div>
            <Link
              to={"/cart"}
              className="border relative border-black px-3 py-1"
            >
              My Cart
              <span className="px-2 absolute text-xs text-white -translate-y-1/2  bg-red-500">
                1
              </span>
            </Link>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default Header;
