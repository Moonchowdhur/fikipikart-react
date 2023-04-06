import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Product = ({product,addHandler}) => {

    const navigation=useNavigation()
    if(navigation.state==="loading"){
        return <Loading></Loading>
    }
  
    const {picture,price,quantity,name,rating,shipping,id}=product
    return (
        <div className='border-2 hover:animate-pulse p-4 
        shadow-lg shadow-cyan-500'>
            <img src={picture} className='object-cover w-full h-[400px]' alt="" />
            <h2 className='font-bold my-4 text-2xl'>{name}</h2>
            <h2>Price:${price}</h2>
            <h2>Rating : {rating}star</h2>
            <h2>Shipping:{shipping}</h2>
            <button onClick={()=>addHandler(product)} className='bg-[#245953] p-3 w-full my-4 text-white font-semibold rounded-lg text-xl'>Add to cart</button>

        </div>
    );
};

export default Product;