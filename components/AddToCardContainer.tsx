import React from 'react'

const AddToCardContainer = () => {
  return (
    <div className='border border-gray-300 rounded-md h-fit'>
        <div className='p-4'>
            <h1><span className='text-[#e934f3] font-bold'>Free Delivery</span> Tuesday, 02 July. <span className='text-[#e934f3]'>Details</span></h1>
            <h1 className='mt-4'>Or fastest delivery Tomorrow, 03 July. Order within 15 hrs 53 min. Details</h1>
            <p className='mt-4'>Join Our Membership for exciting offers</p>
            <p className='mt-4'>Deliver to <span className='text-[#e934f3] '>Adarsh - Narkatiaganj </span>845455</p>
            <button className='bg-pink-500 w-full rounded-full py-2 mt-2'>Add to cart</button>
            <button className='bg-orange-400 w-full rounded-full py-2 mt-2'>Buy now</button>
        </div>
    </div>
  )
}

export default AddToCardContainer