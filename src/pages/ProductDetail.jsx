import React from "react";
import { Outlet, useParams } from "react-router-dom";
import products from "../data/Products";
import ContainerComponent from "../components/Container.component";
import Rating from "../components/Rating";

const ProductDetail = () => {
  const { Id } = useParams();
  const currentProduct = products.find((product) => product.id == Id);

  console.log(currentProduct);
  return (
    <ContainerComponent style={"my-auto"}>
      <div className="border border-black flex flex-col md:flex-row items-center py-2 justify-center">
        <div className=" w-[50%] flex items-center justify-center">
          <img className="w-[30%]" src={currentProduct.image} alt="" />
        </div>
        <div className="w-full md:w-[30%] flex flex-col gap-3">
          <p className="font-bold">{currentProduct.title}</p>
          <p className=" flex justify-center text-gray-700 bg-slate-400">
            {currentProduct.category}
          </p>
          <p className="text-sm font-semibold">{currentProduct.description}</p>
          <Rating rate={currentProduct.rating.rate} className="" />
          <div className="flex justify-between items-center mt-auto">
            <p>Price:{currentProduct.price}</p>
            <button className="border border-black px-2">Add Cart</button>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default ProductDetail;
