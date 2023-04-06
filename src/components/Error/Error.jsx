import React from 'react';

const Error = () => {
    return (
        <div className='bg-lime-400 animate-bounce text-9xl justify-center items-center h-screen flex'>
           <h1 className='text-6xl text-center  text-red-600 font-bold'>E</h1> 
           <h1 className='text-6xl text-red-600 font-bold'>R</h1> 
           <h1 className='text-6xl text-red-600 font-bold'>R</h1> 
           <div className='border-4 h-10 w-10 animate-spin rounded-lg '>O</div>
           <h1 className='text-6xl text-red-600 font-bold'>R</h1> 
          
        </div>
    );
};

export default Error;