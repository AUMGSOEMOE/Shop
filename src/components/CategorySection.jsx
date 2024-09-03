import React from "react";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <div>
      <p className=" font-semibold text-gray-500 mb-3">Product Categories</p>
      <div className="flex items-center">
        <CategoryButton categoryName="all" current={true} />
        {categories.map((category) => (
          <CategoryButton
            key={category}
            current={false}
            categoryName={category}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
