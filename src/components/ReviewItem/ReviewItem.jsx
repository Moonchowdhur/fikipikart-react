import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
const ReviewItem = ({product,removProductHandler}) => {
   console.log(product)
   const {picture,price,id,shipping,name,quantity}=product
    return (
        <div className=' border-2 shadow-lg shadow-cyan-700 p-4 w-[500px] items-center '>
            <div className='flex items-center  gap-4 '>
                <img src={picture} className='w-[50px] h-[50px] rounded-lg ' alt="" />
                <div className='flex items-center justify-between w-full'>
                <div className=''>
                    <h2>{name}</h2>
                    <h2>Priceee: ${price}</h2>
                    <h2>Shipping Charge:${shipping}</h2>
                </div>
                <div>
                <button onClick={()=>removProductHandler(id)} className='text-3xl  text-[#245953]'>
                    <RiDeleteBinFill/>
                </button>
                </div>
                </div>
           
            
               
            </div>
        </div>
    );
};

export default ReviewItem;