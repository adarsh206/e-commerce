import React from 'react'
import { useRouter } from 'next/navigation';
import Subtotal from './shared/Subtotal';

const ProceedToBuy = ({ length, totalPrice }: { length: number, totalPrice: number }) => {
    const router = useRouter();

    return (
        <div className='w-[20%] h-fit border border-gray-300 ml-4'>
            <div className='p-4 text-sm'>
                <p className='py-2'><span className='text-[#007600] font-medium'> Your order is eligible for FREE Delivery.</span> Choose FREE Delivery option at checkout.</p>
                <Subtotal left={true} length={length} totalPrice={totalPrice}/>
                <button onClick={() => {
                    router.push("/checkout")
                }} className='bg-orange-500 w-full py-2 rounded-full shadow-md my-3'>Proceed to Buy</button>
            </div>
        </div>
    )
}

export default ProceedToBuy