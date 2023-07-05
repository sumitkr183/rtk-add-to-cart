"use client";

import { addProducts } from "@/redux/features/productSlice";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCartButton = (props) => {
    const dispatch = useDispatch();


  const handleAddToCart = () => {
    let productPayload = {
        id: props.id,
        title: props.title,
        thumbnail: props.thumbnail,
        price: props.price,
        quantity: 1
    };

    dispatch(addProducts(productPayload));
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white w-full py-2 mt-2 hover:bg-blue-900"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
