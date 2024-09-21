/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Template from "../Components/Template";
import SignupImg from "../assets/signup.png";

const  Signup = ({setIsSignedUp}) => {
    return (
       <Template
       title="Welcome Back"
       desc1="lorem10"
       desc2="lorem20"
       image={SignupImg}
       formType="Login"
       setIsLoggedIn={setIsSignedUp}
       />
    )
}
export default Signup;