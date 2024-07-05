"use client"

import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import Image from 'next/image';
import React from 'react'

import OrderSummary from './OrderSummary';

const DeliveryAddress = () => {
    const cart = useAppSelector(getCart);

  return (
    <div>   
        <div className='py-2 border-b border-gray-300'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-lg'>1. Delivery Address</h1>
                <p className='text-sm'>Adarsh Kumar <br/>
                                        Street Name 123 <br/>
                                        Galaxy Apartment <br/>
                                        ABCD, XYZ, 456465, India <br/>

                </p>
            </div>
        </div>
        <div className='py-2 border-b border-gray-300'>
            <div className='flex justify-between w-[50%]'>
                <h1 className='font-bold text-lg'>2. Items and Delivery</h1>
            </div>
            {
                cart.map((product:any) => {
                    return (
                        <div key={product.id} className='my-4'>
                            <div  className='flex'>
                                <Image src={product.image} width={100} height={100} alt='product.title'/>
                                <div className='ml-4'>
                                    <h1 className='font-bold'>{product.title}</h1>
                                    <p className='text-2xl font-bold py-2'>{`$${product.price}`}</p>
                                </div>
                                
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
           
    </div>
  )
}

export default DeliveryAddress