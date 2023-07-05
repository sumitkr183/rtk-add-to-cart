import React from 'react'
import CartCount from './CartCount'
import Link from 'next/link'

const Header = () => {
  
  return (
    <div className="w-full p-5 bg-blue-600 flex justify-between">
        <Link href="/" className="text-white text-xl">Marketplace</Link>
        <CartCount />
    </div>
  )
}

export default Header