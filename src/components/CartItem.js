"use client";

import { removeProduct, updateProductQuantity } from "@/redux/features/productSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const handleQuantity = (e) => {
    dispatch(updateProductQuantity({id: props.id, quantity: e.target.value}));
  };

  const handleRemove = () => {
    if(!confirm(`Are you sure you want to remove ${props.title}`)) return

    dispatch(removeProduct(props.id));
  };

  return (
    <div className="flex justify-between border-b-[1px] py-4 space-x-10">
      <Image src={props.thumbnail} alt={props.title} width={80} height={80} />
      <h1 className="flex-1">{props.title}</h1>
      <div>
        <select className="border-[1px]" onChange={handleQuantity} value={props.quantity}>
          <option selected disabled value="">
            --Select Quantity--
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <h5 className="w-28">${props.price}</h5>
      <div>
        <button onClick={handleRemove} className="py-1 px-4 bg-red-500 text-white text-sm hover:bg-red-400">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
