
// "use client"

// import { useState } from "react";
// import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
// import PasswordStrengthMeter from "@/components/auth/PasswordStrengthMeter"
// import "./Signup.css"
// import Link from "next/link";
// import { auth, db } from "@/lib/firebase";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { doc, setDoc  } from "firebase/firestore";
// import { useRouter } from "next/navigation";


// // validate email functionality
// const  validateEmail = (email) => {
//     const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }
// // validate password functionality
// const validatePassword = (password) => {
//     if (!password || password.length < 8) {
//         return false;
//     }
//     const hasUpperCase = /[A-Z]/.test(password)
//     const hasLowerCase = /[a-z]/.test(password)
//     const hasNumber = /[0-9]/.test(password)
//     return hasUpperCase && hasLowerCase && hasNumber;
// }
// export default function SignUpPage () {

//     const router = useRouter();
    
// const [formData, setFormData] = useState({
//     username: '', 
//     email: '',
//     firstName: '',
//     lastName: '',
//     phone: '',
//     password: '',
//     confirmPassword: ''
// });
// const [errors, setErrors] = useState({})
// const [isSubmitting, setIsSubmitting] = useState(false)
// const [successMessage, setSuccessMessage] = useState('')

// const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormData(prev => ({...prev, [name]: value}))

//     // clear error when user types
//     if (errors[name]) {
//         setErrors(prev => ({...prev, [name]: ''}))
//     }
// }

// const validateForm = () => {
//     const newErrors = {};


// if (!formData.username.trim()) newErrors.username = "Username is required";
// if (!formData.email.trim()) {
//     newErrors.email = "Email is required";
// } else if (!validateEmail(formData.email)) {
//     newErrors.email = "Please enter a valid email"
// }

// if (!formData.password) {
//     newErrors.password = "Password is required";
// } else if (!validatePassword(formData.password)) {
//     newErrors.password = "Password must be at least 8 characters with uppercase, lowercase, and number";
// }
// if (formData.password !== formData.confirmPassword) {
//     newErrors.confirmPassword = "Password do not match "
// }
// setErrors(newErrors)
// return Object.keys(newErrors).length === 0;
// };  



// const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     try {
//       // 1. Create user with email/password
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );

//       // 2. Update user profile with display name
//       await updateProfile(userCredential.user, {
//         displayName: formData.username
//       });

//       // 3. Save additional user data to Firestore
//       await setDoc(doc (db, "users", userCredential.user.uid), {
//         uid: userCredential.user.uid,
//         email: formData.email,
//         username: formData.username,
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         phone: formData.phone,
//         createdAt: new Date().toISOString()
//       });

//       setSuccessMessage('Account created successfully!');
//       router.push("/Login");
//     } catch (error) {
//       console.error('Signup error:', error);
//       let errorMessage = "Signup failed. Please try again.";
      
//       if (error.code === 'auth/email-already-in-use') {
//         errorMessage = "Email already in use";
//       } else if (error.code === 'auth/weak-password') {
//         errorMessage = "Password should be at least 6 characters";
//       }
      
//       setErrors({ submit: errorMessage });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

// return(
//    <AuthFormWrapper title="">
//     <form onSubmit={handleSubmit} className="authForm">
//         {errors.submit && <div className="error">{errors.submit}</div>}
//         {successMessage && <div className="successMessage">{successMessage}</div>}

//         {/* {username field} */}
//         {/* <div className="formGroup">
//             <label htmlFor="username">Username*</label>
//             <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className={errors.username ? "errorInput" : ''}
//             />
//             {errors.username && <span className="errorText">{errors.username}</span>}
//         </div> */}

// {/* email field */}
//         <div className="formGroup">
//             <label htmlFor="email">Email*</label>
//             <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={errors.email ? "errorInput" : ''}
//             />
//             {errors.email && <span className="errorText">{errors.email}</span>}
//         </div>

// {/* first name input */}
//         <div className="formRow">
//             <div className="formGroup">
//                 <label htmlFor="firstName">First Name</label>
//                 <input 
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 />
//             </div>

//             {/* last name input */}
//             <div className="formGroup">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input 
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 />
//             </div>
//         </div>

//         {/* phone number field */}
//         <div className="formGroup">
//             <label htmlFor="phone">Phone Number</label>
//             <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             />
//         </div>

//         {/* password field */}
//         <div className="formGroup">
//             <label htmlFor="password">Password*</label>
//             <input 
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className={errors.password ? "errorInput" : ''}
//             />

//             {/* for password strength          _________ calling the password strength */    }
//             <PasswordStrengthMeter password={formData.password} />
//             {errors.password && <span className="errorText">{errors.password}</span>}
//         </div>

//         {/* confirm password fields */}
//         <div className="formGroup">
//             <label htmlFor="confirmPassword" >Confirm Password*</label>
//             <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className={errors.confirmPassword ? "errorInput": ''}
//             />
//             {errors.confirmPassword && <span className="errorText">{errors.confirmPassword}</span>}
//         </div>

//         <button
//         type="submit"
//         className="submitButton"
//         disabled={isSubmitting}
//         >
//             {isSubmitting ? 'Creating Account...' : 'Sign Up'}
//         </button>

//         <div className="signupLink">
//              {/* {add a link to login page} */}
// Already have an account? <Link href="/Login">Log In</Link>
//         </div>
//     </form>
//    </AuthFormWrapper>
// );
// }








































































// {ye code without username hai }

"use client"

import { useState } from "react";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import PasswordStrengthMeter from "@/components/auth/PasswordStrengthMeter"
import "./Signup.css"
import Link from "next/link";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

// validate email functionality
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// validate password functionality
const validatePassword = (password) => {
    if (!password || password.length < 8) {
        return false;
    }
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    return hasUpperCase && hasLowerCase && hasNumber;
}

export default function SignUpPage() {
    const router = useRouter();
    
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
      
    });
    
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}))

        // clear error when user types
        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: ''}))
        }
    }

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email"
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (!validatePassword(formData.password)) {
            newErrors.password = "Password must be at least 8 characters with uppercase, lowercase, and number";
        }
        
       
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    };  

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            // 1. Create user with email/password
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            // 2. Update user profile with display name (using firstName if available)
            await updateProfile(userCredential.user, {
                displayName: formData.firstName || formData.email.split('@')[0]
            });

            // 3. Save additional user data to Firestore
            await setDoc(doc(db, "users", userCredential.user.uid), {
                uid: userCredential.user.uid,
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                createdAt: new Date().toISOString()
            });

            setSuccessMessage('Account created successfully!');
            router.push("/Login");
        } catch (error) {
            console.error('Signup error:', error);
            let errorMessage = "Signup failed. Please try again.";
            
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = "Email already in use";
            } else if (error.code === 'auth/weak-password') {
                errorMessage = "Password should be at least 6 characters";
            }
            
            setErrors({ submit: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthFormWrapper title="">
            <form onSubmit={handleSubmit} className="authForm">
                {errors.submit && <div className="error">{errors.submit}</div>}
                {successMessage && <div className="successMessage">{successMessage}</div>}

                {/* email field */}
                <div className="formGroup">
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "errorInput" : ''}
                    />
                    {errors.email && <span className="errorText">{errors.email}</span>}
                </div>

                {/* first name input */}
                <div className="formRow">
                    <div className="formGroup">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* last name input */}
                    <div className="formGroup">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* phone number field */}
                <div className="formGroup">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                {/* password field */}
                <div className="formGroup">
                    <label htmlFor="password">Password*</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? "errorInput" : ''}
                    />
                    <PasswordStrengthMeter password={formData.password} />
                    {errors.password && <span className="errorText">{errors.password}</span>}
                </div>

              

                <button
                    type="submit"
                    className="submitButton"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                </button>

                <div className="signupLink">
                    Already have an account? <Link href="/Login">Log In</Link>
                </div>
            </form>
        </AuthFormWrapper>
    );
}