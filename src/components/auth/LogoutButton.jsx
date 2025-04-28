// "use client"



// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { auth } from "@/lib/firebase";  
// import { signOut } from "firebase/auth";

// export default function LogoutButton ({
//       className = "",
//       buttonText = "Log Out",
//       redirectPath ="/Login",
//       onLogoutSuccess = null,
//       onLogoutError = null
// }) {
//     const router = useRouter();
//     // const  {currentUser} = useAuth();
//     const [isLoading, setIsLoading] = useState(false);

//     const handleLogout = async () => {
//         if (!currentUser) return;

//         setIsLoading(true);

//         try {
//             await signOut();

//             // custom callback
//              if (onLogoutSuccess) {
//                 onLogoutSuccess()
//              } else {
//                 // default behaviour
//                 router.push(redirectPath);
//              }
//         } catch (error) {
//             console.log("Logout error:", error);
//             if(onLogoutError) {
//                 onLogoutError (error)
//             }
            
//         } finally {
//             setIsLoading(false)
//         }
//     }
//     // if (!currentUser) 
//     //     return null;

//     return(
//         <button
//         onClick={handleLogout}
//         disabled = {isLoading}
//         className= {`${className} logout-btn`}
//         aria-label="Log out"
//         >
//             {
//                 isLoading ? (
//                     <span className="logout-loader"></span>
//                 ) : (
//                     buttonText
//                 )  }
//         </button>
//     )
// }










"use client"

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation"
import { useState } from "react";




export default function  LogoutButton({
    className = "",
    buttonText = "Log Out",
    redirectPath = "/Login",  
    onLogoutSuccess = null,
    onLogoutError = null
})  {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)

    const handleLogout = async () => {
        setIsLoading(true)

        try {
            // correctly call firebase signout  with auth object
            await signOut(auth)

            if (onLogoutSuccess) {
                onLogoutSuccess();
            } else {

                try{
router.push(redirectPath)
                } catch (routerError) {
                    window.location.href = redirectPath
                }
            }
        } catch (error) {
            console.error("Logout error:" , error);
            if (onLogoutError) {
                onLogoutError(error)
            }
        } finally {
            setIsLoading(false)
        }
    };
    return (
        <button 
        onClick={handleLogout}
        disabled = {isLoading}
        className={`${className} logout-btn`}
        aria-label="Log out"
        >
            {isLoading ? (
                <span className="logout-loader">Loading...</span>
            ) : (
                buttonText
            )}
        </button>
    )
}