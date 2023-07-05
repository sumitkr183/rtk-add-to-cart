"use client";

import Link from "next/link";
import {useSelector} from "react-redux"

const CartCount = () => {
 const cart = useSelector((state) => state.products.cart);

  return (
    <Link href="/cart" className="text-white">
      Cart <span className="bg-red-500 py-1 px-3 rounded-full">{cart.length || 0}</span>
    </Link>
  );
};

export default CartCount;
