import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../utilites/fakedb';
import { FaArrowCircleRight} from 'react-icons/fa';
import Loading from '../Loading/Loading';
const OrderReview = () => {

    const navigation=useNavigation()
    if(navigation.state==="loading"){
        return <Loading></Loading>
    }
    const savedCart=useLoaderData()
    const [cart,setCart]=useState(savedCart)


    // Delete a product from database also ui
     function removProductHandler(id){
         const remainingProduct=cart.filter(p=>p.id!==id)
         setCart(remainingProduct)
         removeFromDb(id)
     }

     function removAllProductHandler(){
        setCart([])
        deleteShoppingCart()
    }
    
    return (
        <div className='md:flex md:mx-16 p-4 gap-96'>
            <div className='' >
{/* review product contains */}
            {
                cart.map(product=><ReviewItem removProductHandler={removProductHandler} product={product}></ReviewItem>)
            }
            </div>

            <div className='md:fixed top-16 right-12'>
 {/* cart contains */}  
            <Cart removAllProductHandler={removAllProductHandler} cart={cart}>
                 <Link to="/checkout">
                  <div className='flex gap-2 items-center'>
                    Checkout To Proceed
                    <FaArrowCircleRight/>
                </div>
               </Link> 
            </Cart>             
             </div>
        </div>
    );
};

export default OrderReview;