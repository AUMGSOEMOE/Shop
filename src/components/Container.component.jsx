import React from "react";

const ContainerComponent = ({ children }) => {
  return (
    <div className=" w-[90%] flex flex-col h-screen  pt-3 mx-auto">
      {children}
    </div>
  );
};

export default ContainerComponent;
