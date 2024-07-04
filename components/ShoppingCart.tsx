"use client"

import { useAppDispatch, useAppSelector } from '@/lib/supabase/hooks/redux'
import { clearAllCart, decrementQuantity, getCart, incrementQuantity, removeFromTheCart } from '@/redux/cartSlice'
import Image from 'next/image'
import React from 'react'
import Subtotal from './shared/Subtotal'

const ShoppingCart = ({cart, totalPrice}:{cart:any, totalPrice:number}) => {
    const dispatch = useAppDispatch();
  return (
    <div className='w-[70%]'>
        <div className='flex justify-between items-center border-b border-gray-300 py-5'>
          <h1 className='font-bold text-2xl '>Shopping Cart</h1> 
          <h1 className='font-medium'>Price</h1>
        </div>
        
        {
            cart.map((product: any) => {
                return(
                    <div className='py-4 flex justify-between border-b border-gray-200' key={product.id}>
                     <div className='flex'>
                        <div>
                            <Image src={product.image} width={100} height={100} alt={product.title} />
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium'>{product.title}</h1>
                            <p className='text-blue-500 font-bold my-1 text-xs'>In Stock</p>
                            <h1 onClick={() => {
                                dispatch(removeFromTheCart(product.id))
                            }} className='font-bold  text-red-600 cursor-pointer'>REMOVE</h1> 
                            <div className='flex items-center my-4 justify-between text-xl font-medium w-fit bg-gray-200 rounded-md px-5 py-1'>
                                <div onClick={() => {
                                  product.quantity > 1 && dispatch(decrementQuantity(product))
                                }} className='cursor-pointer mr-4'>-</div>
                                <div>{product.quantity}</div>
                                <div onClick={() => {
                                    dispatch(incrementQuantity(product))
                                }} className='cursor-pointer ml-4'>+</div>
                            </div>
                        </div>
                     </div>
                <div>
                    <h1 className='font-bold text-xl'>{`$${product.price}`}</h1>
                    <p className='text-xs py-1'>M.R.P : <span className='line-through'>$39.99</span></p>
                </div>
        </div>
                   
                )
            })
        }
        <h1 onClick={()=>{
                dispatch(clearAllCart());
            }} className='text-red-600 font-bold cursor-pointer py-2'>CLEAR ALL</h1>
      <Subtotal left={false} length={cart.length} totalPrice={totalPrice}/>
    
    </div>
  )
}

export default ShoppingCart