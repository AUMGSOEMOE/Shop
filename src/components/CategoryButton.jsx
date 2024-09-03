import React from "react";

const CategoryButton = ({ categoryName, current }) => {
  return (
    <button
      className={`${
        current ? "bg-black text-white" : ""
      } text-sm text-nowrap border border-black px-2 py-1 mr-6`}
    >
      {categoryName}
    </button>
  );
};

export default CategoryButton;
