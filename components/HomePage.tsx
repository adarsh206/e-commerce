/* eslint-disable react-hooks/exhaustive-deps */
'use client';


import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import Image from 'next/image'
import React, { useEffect } from 'react'
import CategoryWiseProduct from './shared/CategoryWiseProduct';
import Below from './Below';

const HomePage = () => {
  const {  mensProduct, getMensClothing, womensProduct, getWomensClothing } = useSupabase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  },[]);



  return (
    <>
     <div>
        <Image src={"https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg"}
        width={10000}
        height={1000}
        alt='banner'
        style={{
          maskImage:'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
      }}
        />
        <div className='w-[90%] mx-auto grid grid-cols-4 gap-2 relative -top-64'>
        {
          mensProduct.map((product: any) => {
            return (
              <div key={product.id}>
                <CategoryWiseProduct product={product}/>
              </div>
            )
          })
        }
        {
          womensProduct.map((product: any) => {
            return (
              <div key={product.id}>
                <CategoryWiseProduct product={product} />
              </div>
            )
          })
        }
      </div>
   
      
    </div>
    </>
   
      
  )
}

export default HomePage