// "use client"

// const { createContext, useState, useEffect, useContext } = require("react")
// import { auth } from "@/lib/firebase";
// import {onAuthStateChanged} from "firebase/auth "

// const AuthContext = createContext();

// export function AuthProvider ( {children} ) {
//     const [currentUser, setCurrentUser] = useState(null)
//     const [loading, setLoading] =  useState (true)

//     useEffect (() => {
//         const unsubscribe = onAuthStateChanged (auth, (user) => {
//             setCurrentUser(user);
//             setLoading(false);
//         })
//         return unsubscribe;
//     }, [])

//     return(
//         <AuthContext.Provider value={{currentUser}} >
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(AuthContext);
// }
