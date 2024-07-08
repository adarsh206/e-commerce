"use client"

import React from 'react'
import DeliveryAddress from './DeliveryAddress'
import OrderSummary from './OrderSummary'
import { FaLock } from 'react-icons/fa6'
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';


export const Checkout = () => {
  
  const cart = useAppSelector(getCart);
    let totalPrice = 0;
    cart.forEach((item:any)=>{
        totalPrice += item.price * item.quantity
    });
 

  return (
    <div className='w-full p-10'>
          <div className='flex mx-auto w-[70%] items-center justify-between  border-gray-400 border-b py-3'>
            <div>
              <h1 className='font-bold text-2xl'>Checkout</h1>
            </div>
            <div className='text-gray-400'>
                <FaLock size={"30px"}/>
            </div>
        </div>
        <div className='flex justify-between w-[70%] mx-auto'>
            <DeliveryAddress />
            <OrderSummary totalPrice={totalPrice}/>
        </div>
        
    </div>
       

  )
}
