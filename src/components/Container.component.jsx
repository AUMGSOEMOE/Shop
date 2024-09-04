import React from "react";

const ContainerComponent = ({ children, style }) => {
  return (
    <div
      className={`w-[90%] md:w-[90%] lg:w-[90%] xl:[1280px] flex flex-col  pt-3 mx-auto ${style}`}
    >
      {children}
    </div>
  );
};

export default ContainerComponent;
