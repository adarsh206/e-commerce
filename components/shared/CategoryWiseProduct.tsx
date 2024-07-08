import Image from 'next/image'
import React from 'react'
import Ratings from './Ratings'
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addToCart } from '@/redux/cartSlice';

const CategoryWiseProduct = ({product}:{product:any}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className='border border-gray-300 p-2 bg-white'>
      <h1 className='font-bold'>{product.category}</h1>
        <div className='mt-2 h-[250px] overflow-hidden flex items-center justify-center'>
            <Image className='p-6' src={product.image} width={200} height={150} alt='product.title'/>
        </div>
        <div>
          <h1>{product.title}</h1>
          <Ratings ratings={product.rating}/>
          <div className='font-bold py-1'>
          <p className='text-black'>Price: ${product.price}</p>
          </div>
          
        </div>
        <div className='my-2'>
                <button
                    onClick={() => {
                        dispatch(addToCart(product));
                        router.push("/cart");
                    }
                    }
                    className='w-full py-2 rounded-md bg-orange-500'>Add to Cart</button>
            </div>
    </div>
  )
}

export default CategoryWiseProduct