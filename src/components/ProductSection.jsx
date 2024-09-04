import React from "react";
import ProductCard from "./ProductCard";
import ContainerComponent from "./Container.component";
import products from "../data/Products";

const ProductSection = () => {
  return (
    <ContainerComponent>
      <div className=" mt-4">
        <p className=" font-semibold text-gray-500 mb-3">Available Items</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </ContainerComponent>
  );
};

export default ProductSection;
