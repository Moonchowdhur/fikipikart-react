import React from 'react';

const Cart = ({cart,removAllProductHandler,children}) => {

 
    let totalprice=0
    let totalquantity=0
    let totalShipping=0
    for( const product of cart ){
        product.quantity=product.quantity||1
        totalprice=totalprice+product?.price*product?.quantity
        totalquantity=totalquantity+product?.quantity
        totalShipping=totalShipping+product?.shipping
    }
    let totaltax=totalprice*10/100
    let grandtotal=totaltax+totalprice+totalShipping

    return (
        <div className='bg-[#245953] p-4 mt-4 mx-4 text-white'>
            <h2 className='text-center pt-3  font-bold text-2xl my-5' >Order Summary</h2>
            <div className='p-4 m-3 border'>
                <h2 className='my-4 text-white'>Selected Items:{totalquantity}</h2>
                {/* <h2 className='my-4 text-white'>quan:{quantity}</h2> */}
                <h2 className='my-3'>Total Price: ${totalprice}</h2>
                <h2 className='my-2'>Total Shipping Charge: ${totalShipping}</h2>
                <h2>Tax: ${totaltax.toFixed(2)}</h2>
                <p className=' font-bold text-xl my-4'>Grand Total: ${grandtotal.toFixed(2)}</p>
            </div>

            {/* clear cart button */}
            <div onClick={removAllProductHandler}>
                <button className='bg-[#FFD93D] rounded-xl p-3 mx-auto w-full text-black font-bold text-xl  '>
                    Clear Cart
                </button>               
            </div>
          {/* review order/checkout btn */}
          <div >
                <button className='bg-[#FFD93D] text-center my-4 rounded-xl mx-auto w-full text-black p-3 font-bold text-xl  '>
                 {children}
                </button>
               
            </div>
        </div>
    );
};

export default Cart;