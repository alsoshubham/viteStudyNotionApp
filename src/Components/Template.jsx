/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Signup from "../Pages/Signup";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LogInForm from "./LogInForm";
import Login from "../Pages/Login";

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
    return(
        <div>
            <div>
                <h1>
                    {title}
                </h1>

                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formType === "Signup" ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LogInForm setIsLoggedIn={setIsLoggedIn}/>)
                }

                <div>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>

                <button>Sign Up with Google</button>
            </div>

            <div>
                <img src={frameImage} alt="patternimage" width={558} height={504}/>
                <img src={Image} alt="students" width={558} height={490}/>
            </div>

        </div>
    )
}

export default Template;