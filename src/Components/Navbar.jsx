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
        <div className="flex justify-evenly">
            <Link to="/">
             <img src={logo} alt="Logo" width={160} height={32}/>
            </Link>

            <nav className="flex  gap-3 bg-violet-400">
                <ul><Link to="/">Home</Link></ul>
                <ul><Link to="/About">About</Link></ul>
                <ul><Link to="/Contact">Contact</Link></ul>
            </nav>

            <div className="flex ml-5 mr-3 gap-3">
                { !isLoggedIn &&
                  <Link to="/Login">
                  <button>Login</button>
                  </Link>
                }
                { !isLoggedIn &&
                  <Link to="/Signup">
                  <button>Sign Up</button>
                  </Link>
                }
                { isLoggedIn &&
                  <Link to="/">
                  <button onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                  }}>Log Out</button>
                  </Link>
                } 
                { isLoggedIn &&
                  <Link to="/Dashboard">
                  <button>Dashboard</button>
                  </Link>
                }
            </div>
        </div>
    )
}
export default Navbar;