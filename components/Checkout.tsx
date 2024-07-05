"use client"

import React from 'react'
import DeliveryAddress from './DeliveryAddress'
import OrderSummary from './OrderSummary'
import { FaLock } from 'react-icons/fa6'


export const Checkout = () => {
 

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
            <OrderSummary />
        </div>
        
    </div>
       

  )
}
