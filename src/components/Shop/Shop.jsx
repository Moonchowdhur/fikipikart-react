import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilites/fakedb';
import Cart from '../Cart/Cart';
import { FaArrowCircleRight} from 'react-icons/fa';
const Shop = () => {
    const products=useLoaderData()
    const [cart,setCart]=useState([])
   
    let addedCart=[]
    // a function handler where we send function to child components as a props for catching data
    function addHandler(product){
   
        addedCart=[...cart,product]
        setCart(addedCart)
        addToDb(product.id)

    }
    function removAllProductHandler(){
        setCart([])
        deleteShoppingCart()
    }
    useEffect(()=>{
      let saverCart=[]
      const stored=getShoppingCart()
      if(stored){
        for(const id in stored){
          const existingProduct=products.find(product=>product.id==id)
          if(existingProduct){
            const quan=stored[id]
            existingProduct.quantity=quan
          }
          saverCart.push(existingProduct)
         
        }
        setCart(saverCart)
      }

    },[products])

    return (
        <div className='md:flex md:mx-16 '>
         <div className=' md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-4  p-4'>
            {/* product contains */}
            {
                products.map(product=><Product addHandler={addHandler} key={product.id} product={product}></Product>)
            }
         </div>
         <div className=' md:w-[30%] md:fixed top-14 right-9' >
            {/* cart contains */}
            <Cart  removAllProductHandler={removAllProductHandler} cart={cart}>
                <Link to="/review" className='w-full text-center'>
                    <div className=' flex justify-center gap-2 items-center text-center'>
                    <span>
                    Review order
                    </span>
                     <FaArrowCircleRight/>
                    </div>
                </Link>
            </Cart>
         </div>
        </div>
    );
};

export default Shop;