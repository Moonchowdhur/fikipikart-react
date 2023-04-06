import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div className='bg-[#FFD93D] items-center  pt-8 h-[400px] md:mx-16 p-4'>
          <div className='md:w-[50%] p-4 font-bold'>
            <h2 className='text-5xl'>New Season Arrival</h2>
            <p className='text-4xl tracking-widest my-8'>CHECK OUT ALL THE NEW ARRIVAL</p>
            <Link to="/shop"><button className='bg-[#245953] text-white p-3'>SHOP NOW</button></Link>
     </div>
        </div>

    );
};

export default Home;