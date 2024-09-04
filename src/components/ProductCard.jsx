import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

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
    <Link
      to={`/detail/${id}`}
      className="border flex flex-col gap-4 border-black p-4"
    >
      <img src={image} className=" w-[30%]" alt="" />
      <p className=" font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} className="" />
      <div className="flex justify-between  w-full items-center">
        <p>{price}</p>
        <button className="border text-nowrap border-black px-2">
          Add Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
