import React from 'react';

const Loading = () => {
    return (
        <div className=' animate-bounce text-9xl justify-center items-center h-screen flex'>
        <h1 className='text-6xl text-center  text-red-600 font-bold'>L</h1> 
        <div className='border-4 h-10 w-10 animate-spin rounded-lg '>O</div>
        <h1 className='text-6xl text-red-600 font-bold'>A</h1> 
        <h1 className='text-6xl text-red-600 font-bold'>D</h1> 
        <h1 className='text-6xl text-red-600 font-bold'>I</h1>
        <h1 className='text-6xl text-red-600 font-bold'>N</h1> 
       <h1 className='text-6xl text-red-600 font-bold'>G</h1> 
       
     </div>
    );
};

export default Loading;