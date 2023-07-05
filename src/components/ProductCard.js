import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = (props) => {
  return (
    <div className="border-[1px] p-3 shadow-sm">
      <div className="relative w-full h-52">
        <Image
          src={props.thumbnail}
          alt={props.title}
          layout="fill"
          className="object-contain bg-black/5"
        />
      </div>
      <h1 className="my-2">{props.title}</h1>
      <h2>${props.price}</h2>

      <AddToCartButton {...props} />
    </div>
  );
};

export default ProductCard;
