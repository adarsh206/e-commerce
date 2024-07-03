/* eslint-disable react-hooks/exhaustive-deps */
'use client';


import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import Image from 'next/image'
import React, { useEffect } from 'react'

const HomePage = () => {
  const {  mensProduct, getMensClothing, womensProduct, getWomensClothing } = useSupabase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  },[]);

  console.log(mensProduct)

  return (
    <div>
        <Image src={"https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg"}
        width={10000}
        height={1000}
        alt='banner'
        />
    </div>
  )
}

export default HomePage