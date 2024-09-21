import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const SignupForm = () =>{

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }
        ))
    }

    const[showPassword, setShowPassword] = useState(false)

    return(
        <div>

           <div>
            <button>
                student
            </button>
            <button>
                Instructor
            </button>
           </div>


           <form>
            <div className='flex gap-x-4 mt-[20px]'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                >First Name <sup className='text-pink-200'>*</sup></p>
                <input 
                required 
                type="text"
                name="firstname"
                onClick={changeHandler}
                placeholder="enter first name"
                value={formData.firstName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>


            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> 
                Last Name <sup className='text-pink-200'>*</sup></p>
                <input 
                required 
                type="text"
                name="Lastname"
                onClick={changeHandler}
                placeholder="Enter Last Name"
                value={formData.lastName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
            </div>

            <div>
               <label>
                <p>email <sup>*</sup></p>
                <input required type="email"
                name="email"
                onClick={changeHandler}
                placeholder="enter Email ID"
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label> 
            </div>

            <div className='w-full flex gap-x-4 mt-[20px]'>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                >Create Password <sup className='text-pink-200'>*</sup></p>
                <input required 
                type={showPassword ? ("text"): ("password")}
                name="Password"
                onClick={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span className='absolute right-3 top-[38px] cursor-pointer'
                 onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' 
                >Confirm Password <sup className='text-pink-200'>*</sup></p>
                <input 
                required 
                type={showPassword ? ("text"): ("password")}
                name="Confirm Password"
                onClick={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />


                <span className='absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ?
                 (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                 (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                }
            </span>
            </label>
            </div>
            
            <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>
            </form>
        </div>
    )
}

export default SignupForm