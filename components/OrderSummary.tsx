import React from 'react'

const OrderSummary = () => {
  return (
    <div className='border border-gray p-4 mt-3.5 h-fit'>
        <div>
            <h1 className='font-bold'>Order Summary</h1>
            <div className='text-xs'>
                <div className='flex items-center justify-between'>
                    <p>Items:</p>
                    <p>$750</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p>Delivery:</p>
                    <p>$40</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p>Total:</p>
                    <p>$750</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p>Promotion Applied:</p>
                    <p>-$40</p>
                </div>
                <div className='flex text-2xl font-bold text-red-600 py-3 border-t border-b border-gray-300 my-1'>
                    <h1>Order Total:</h1>
                    <p>$1456</p>
                </div>
            </div>
            <button className='bg-orange-500 w-full rounded-full px-4 py-2 my-3'>Place Your Order Now</button>
        </div>
    </div>
  )
}

export default OrderSummary