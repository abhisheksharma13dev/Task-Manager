"use client"

import LogoutButton from "@/components/auth/LogoutButton";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "@/lib/firebase"; // firebase auth
import { useRouter } from "next/navigation"; // next js router for navigation 


export default function Dashboard () {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null) // store auth errors
    const router = useRouter(); // useRouter hook is used for client-side navigation between pages in your application.

    // authentication state listner
    useEffect(() => { 
        let isMounted = true;  // flag to track component mount status

        try {
            //sub to firebase auth state changes
            const unsubscribe = onAuthStateChanged(auth, (user) => { // automatically  redirect to login if no user is authenticated
                // skip if component is unmounted   
                if (!isMounted) return; 

                if (user) {
                    setCurrentUser(user)
                    console.log(currentUser)
                } else {
                    try{
                        router.push("/Login");  // try client side navigation / rendring
                    } catch (e) {
                        window.location.href= "/Login"; // fallback if routher is failed 
                    }
                }
                setLoading (false)  // loading complete
            });
            return () => {
                isMounted = false;
                unsubscribe(); // remove auth state listner
            };
        } catch (err) {   
            //handle any error in auth check
            setError("Auth check failed");
            setLoading(false)
        }
        
        }, []); // Empty dependency array means this runs once on mount

        if (loading) return <div>Loading...</div>  // display loading
        if (error) return <div> Error: {error}</div> // display error
 

    return (
        // <ProtectedRoute>
        //     <div className="container">
        //         <h1 className="title">Welcome, {currentUser?. displayName || currentUser?.email }!</h1>
        //   <p className="message">This is your Dashboard</p>
        //   <LogoutButton/>
        //     </div>
        // </ProtectedRoute>

        <div className="container">
            <h1>Welcome, {currentUser?.email || "User"}!</h1>
            <h1>Welcome, {currentUser?.username || "User"}!</h1>
            <h1>Welcome, {currentUser?.firstName || "User"}!</h1>
            <h1>Welcome, {currentUser?.email || "User"}!</h1>
            <h3>hiiiiii, {currentUser?. lastName || "users"}</h3>
            <LogoutButton/>
        </div>
    );

}