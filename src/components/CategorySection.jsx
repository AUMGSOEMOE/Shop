import React from "react";
import CategoryButton from "./CategoryButton";
import ContainerComponent from "./Container.component";

const CategorySection = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <ContainerComponent>
      <div>
        <p className=" font-semibold text-gray-500 mb-3">Product Categories</p>
        <div className="flex items-center gap-2">
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
    </ContainerComponent>
  );
};

export default CategorySection;
