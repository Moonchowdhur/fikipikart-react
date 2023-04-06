import React, { useState } from 'react';
import { FaConfluence,FaHamburger } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import {  NavLink } from 'react-router-dom';
const Header = () => {
   const [open,SetOpen]=useState(false)
   
    return (
        <div className={`flex text-3xl font-bold justify-between md:mx-16 h-16 bg-[#245953] p-4 text-white  `}>
        
            <div className={`flex justify-center`}>
              <h2 className='tracking-widest '>FKIPIKART</h2>
            <FaConfluence className='text-4xl  text-white'/> 
            </div>
            <div  className={`flex flex-col md:flex-row  bg-blue-700 md:bg-transparent  text-xl font-bold gap-4 absolute md:static items-center ${open? "top-12 right-0 ":"-top-32"}`}>
           
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive? "text-red-500": ""
                    }
                  > Home
                    {/* other code */}
                  </NavLink>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive? "text-red-500": ""
                    }
                  >Shop
                    {/* other code */}
                  </NavLink>
                  <NavLink
                    to="/review"
                    className={({ isActive }) =>
                      isActive? "text-red-500": ""
                    }
                  > Order Review
                    {/* other code */}
                  </NavLink>
            </div>
          <div className='md:hidden' onClick={()=>SetOpen(!open)}>
            {
              open ? <ImCross/> :   <FaHamburger/>
            }
             {/* <FaHamburger/>
             <ImCross/> */}
          </div>
        </div>
    );
};

export default Header;