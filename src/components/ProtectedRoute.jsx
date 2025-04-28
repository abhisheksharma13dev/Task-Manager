"use client"

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function ProtectedRoute ({children}) {
    const {currentUser} = useAuth();
    const router  = useRouter();


    useEffect (() => {
        if (!currentUser) {
            router.push("/Login")
        }
    }, [currentUser, router])

    return currentUser ? children : null;
}