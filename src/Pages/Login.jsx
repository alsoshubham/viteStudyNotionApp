/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Template from "../Components/Template";
import loginImg from "../assets/login.png"

const Login =({setIsLoggedIn,formState}) => {
    return(
        <Template
        title="Welcome Back"
        desc1="lorem10"
        desc2="lorem20"
        image={loginImg}
        formType={formState}
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default Login
