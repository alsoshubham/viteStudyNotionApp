/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Logo.png";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return(
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
             <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                { !isLoggedIn &&
                  <Link to="/Login">
                  <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'
                  >Login</button>
                  </Link>
                }
                { !isLoggedIn &&
                  <Link to="/Signup">
                  <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'
                  >Sign Up</button>
                  </Link>
                }
                { isLoggedIn &&
                  <Link to="/">
                  <button onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                  }}
                  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'
                  >Log Out</button>
                  </Link>
                } 
                { isLoggedIn &&
                  <Link to="/Dashboard">
                  <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'
                  >Dashboard</button>
                  </Link>
                }
            </div>
        </div>
    )
}
export default Navbar