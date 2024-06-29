import Link from 'next/link'
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    <div className='bg-[#131921] text-white py-3'>
        <div className='flex items-center justify-between w-[90%] mx-auto'>
               <Link href={'/'} className='w-[10%] text-orange-600 font-bold text-2xl'>
                     ECOMMERCE
               </Link>
               <div className='w-full'>
                     <input className='w-[80%] mx-5' type='text' placeholder='Search products'/>
             </div>
             <div className='flex items-center w-[20%]'>
                <div>
                    <h1 className='text-xs'>Hello, Adarsh</h1>
                    <h1 className='font-medium text-sm'>Accounts & Lists</h1>
                </div>
                <div>
                    <p className='text-xs'>Returns</p>
                    <h1 className='font-medium text-sm'>& Orders</h1>
                </div>
                <div>
                    <p className='relative top-1 left-2.5'>0</p>
                    <div className='flex'>
                        <div>
                            <FaCartArrowDown size={"30px"}/>
                        </div>
                        <h1 className='mt-2'>Cart</h1>
                    </div>
                    
                </div>
             </div>
        </div>
       
    </div>
    </>
    
  )
}

export default Header