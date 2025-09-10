'use client'
import { useCartStore } from '@/store/cart-store';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const Navbar = () => {
  
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const {items} = useCartStore() 

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

  // Set mobile effect
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768 ){
        setMobileOpen(true)
      }
    } 
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  },[])


  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href={"/"} className="hover:text-blue-600">
          My Ecommerce
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href={"/"} className="hover:text-blue-600">
            Home
          </Link>
          <Link href={"/products"} className="hover:text-blue-600">
            Products
          </Link>
          <Link href={"/checkout"} className="hover:text-blue-600">
            Checkout
          </Link>
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-4">
          <Link href={"/checkout"} className='relative'>
            <ShoppingCartIcon className='h-6 w-6' />
            {cartCount > 0 && <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500'>{cartCount}</span>}
          </Link>

        {/* Mobile menu */}
      <Button variant="ghost" className={"md:hidden"}
      onClick={() => setMobileOpen((prev) => !prev)} >
        {mobileOpen ? <XMarkIcon className='h-6 w-6'/> : <Bars3Icon className='h-6 w-6'/>}
      </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className='md:hidden bg-white shadow-md'>
          <ul className='flex flex-col p-4 space-y-2'>
            <li className='block hover:text-blue-600'>
              <Link href={'/'}>Home</Link>
            </li>
            <li className='block hover:text-blue-600'>
              <Link href={'/products'}>Products</Link>
            </li>
            <li className='block hover:text-blue-600'>
              <Link href={'/checkout'}>Checkout</Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
}

export default Navbar
