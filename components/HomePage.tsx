/* eslint-disable react-hooks/exhaustive-deps */
'use client';


import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import Image from 'next/image'
import React, { useEffect } from 'react'
import CategoryWiseProduct from './shared/CategoryWiseProduct';
import Below from './Below';
import { useParams, useRouter } from 'next/navigation';
import SingleProduct from './SingleProduct';

const HomePage = () => {
  const {  mensProduct, getMensClothing, womensProduct, getWomensClothing, getSingleProduct, singleProduct } = useSupabase();
  const  router  = useRouter();
  const { id }  = useParams();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
    getSingleProduct(Number(id));
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
              <div key={product.id} onClick={() => {
                router.push(`/product/${product.id}`)
              }}>
                <CategoryWiseProduct product={product}/>
              </div>
            )
          })
        }
        {
          womensProduct.map((product: any) => {
            return (
              <div key={product.id} onClick={() => {
                router.push(`/product/${product.id}`)
              }}>
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