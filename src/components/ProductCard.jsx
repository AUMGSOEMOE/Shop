import React from "react";
import Rating from "./Rating";

const ProductCard = ({
  product: {
    title,
    category,
    id,
    image,
    description,
    price,
    rating: { rate },
  },
}) => {
  return (
    <div className="border flex flex-col border-black p-4">
      <img src={image} className=" h-[40%]" alt="" />
      <p className=" font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} className="" />
      <div className="flex justify-between  w-full items-center">
        <p>{price}</p>
        <button className="border text-nowrap border-black px-2">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
