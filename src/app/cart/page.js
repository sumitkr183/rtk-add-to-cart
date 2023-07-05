"use client";

import CartItem from "@/components/CartItem";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);

  const total = useMemo(()=> cart?.reduce((prev,curr)=>(
    prev += (curr.price * curr.quantity)
  ),0), [cart])

  return (
    <div className="w-full p-5">
      <h1>Cart Items</h1>

      <div className="flex justify-between mt-4 space-x-5">
        <div className="flex-1 border-[1px] p-5">
          {cart?.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="w-1/4 border-[1px] p-5 flex flex-col justify-between">
          <div className="flex flex-col justify-between">
            <p className="flex justify-between">
                Total Items: <span>{cart.length}</span>
            </p>
          </div>
          <p className="flex justify-between">
            Total: <span>${total}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
