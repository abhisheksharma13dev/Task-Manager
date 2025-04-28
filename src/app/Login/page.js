"use client"

import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react"
import "./Login.css";
import { auth } from "@/lib/firebase";
import Link from "next/link";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '', // using email
        password: '',
        rememberMe : false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] =useState(false);
    const router = useRouter(); // useRouter hook is used for client-side navigation between pages in your application.

    const handleChange = (e) => {
        const {name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) setErrors (prev => ({...prev, [name]: ''}));

    };

    const validateForm = () => {
        const newErrors = {};
        if(!formData.email.trim()) newErrors.email = 'Email is requried';
        if(!formData.password.trim()) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateForm()) return;

        setIsSubmitting(true);
        try {
            await signInWithEmailAndPassword (                           //  using Firebase Authentication to sign in a user with their email and password.
                   auth,
                   formData.email,
                   formData.password
            );
            // login succesfull
            router.push("/Dashboard");   // redirect to the Dashboard
        } catch (error) {
            console.error('Login error:', error);
            let errorMessage = 'Invalid Email or Password' // message for security

            // add more msg 
            if (error.code === 'auth/invalid-email') {
                errorMessage = 'Please enter a valid Email';
            } else if(error.code === 'auth/user-not-found') {
                errorMessage = "No account found with this email";  
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = "Incorrect Password"
            }
            setErrors({submit: errorMessage});
        } finally {
            setIsSubmitting(false)
        }
    };

    return(
        <AuthFormWrapper title= "login">
            <form onSubmit={handleSubmit} className="authForm">
                {errors.submit && <div className="error">{errors.submit}</div>}


                {/* {email field} */}
                <div className="formGroup">
                    <label htmlFor="email">Email*</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "errorInput" : ""}
                    />
                    {errors.email && <span className="errorText">{errors.email}</span>}
                </div>


                
 {/* password field */}
       <div  className="formGroup">
            <label htmlFor="password">Password*</label>
            <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "errorInput" : ""}
            />
            {errors.password && <span className="errorText">{errors.password}</span>}
        </div>


                     
 {/* password rememberMe field */}
         <div className="formOptions">
            <div className="rememberMe">
                <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <Link href ="/forgot-password" className="forgotPassword">
            Forgot Password?
            </Link>
        </div>

        <button
        type="submit"
        className= "submitButton"
        disabled={isSubmitting}
        >
            {isSubmitting ? 'Logging In...' : 'Log In'}
        </button>
        
        <div className="signupLink">
            Don't have an account? <Link href="/">Sign Up</Link> 
            {/* {corrected link to signup} */}
        </div>
        </form>
                
           
        </AuthFormWrapper>
        
    )
}









































// {ye code username wala hai purana hai upar wale ko update kr rha hu success rha to badiya  }


// "use client"

// import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
// import { useState } from "react";
// import Link from "next/link";
// import  "./Login.css"
// // import {auth} from "@/lib/firebase"
// // import { useAuth } from "@/context/AuthContext";

// export default function LoginPage() {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         rememberMe: false

//     });

//     const [errors, setErrors] = useState({})
//     const [isSubmitting, setIsSubmitting] = useState(false)
    

//     const handleChange = (e) => {
//         const {name, value, type, checked}= e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));

//         // clear the error when user types
//         if (errors[name]) {
//             setErrors(prev => ({...prev, [name]: ''}));
//         }
//      }; 

//      const validateForm = () => {
//         const newErrors = {};

//         if (!formData.username.trim()) newErrors.username= 'Username is required';
//         if (!formData.password.trim()) newErrors.password = 'Password is required';

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;  
//      };

//      const handleSubmit = async (e) => {
//         e.preventDefault();
//         if(!validateForm()) return;

//         setIsSubmitting(true);
//         try{
//             await new Promise(resolve => setTimeout(resolve, 1000));

//             //clear form field
//             setFormData({
//                 username: '',
//                 password: '',
//                 rememberMe: false
//             })

//             // show alert message
//             alert('Login Successfull!')
//             // TODO: connect to your backend API
//             console.log('login data:', formData);

//             //redirect or show success message   
//         } catch (error) {
//             console.log('Login error:', error );
//             setErrors({ submit: "Invalid username or password" });
//              } finally {
//                 setIsSubmitting(false)
//              }
//      };


//      return(
//        <AuthFormWrapper title="">
//         <form onSubmit={handleSubmit} className="authForm">
//         {errors.submit && <div className="error"> {errors.submit}</div>}

// {/* username field */}
//         <div className="formGroup">
//             <label htmlFor="username">Username*</label>
//             <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className={errors.username ? "errorInput" :  ""}
//             />
//             {errors.username && <span className="errorText">{errors.username}</span>}
//         </div>


// {/* password field */}
//         <div  className="formGroup">
//             <label htmlFor="password">Password*</label>
//             <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className={errors.password ? "errorInput" : ""}
//             />
//             {errors.password && <span className="errorText">{errors.password}</span>}
//         </div>
        
// {/* password rememberMe field */}
//         <div className="formOptions">
//             <div className="rememberMe">
//                 <input
//                 type="checkbox"
//                 id="rememberMe"
//                 name="rememberMe"
//                 checked={formData.rememberMe}
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="rememberMe">Remember Me</label>
//             </div>

//             <Link href ="/forgot-password" className="forgotPassword">
//             Forgot Password?
//             </Link>
//         </div>

//         <button
//         type="submit"
//         className= "submitButton"
//         disabled={isSubmitting}
//         >
//             {isSubmitting ? 'Logging In...' : 'Log In'}
//         </button>
        
//         <div className="signupLink">
//             Don't have an account? <Link href="/">Sign Up</Link> 
//             {/* {corrected link to signup} */}
//         </div>
//         </form>
//        </AuthFormWrapper>
//      )
// }








