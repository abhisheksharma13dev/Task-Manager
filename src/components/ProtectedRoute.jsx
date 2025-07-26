"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function ProtectedRoute({ children }) {
  const [currentUser, setCurrentuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentuser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // redirect logic  moved inside useeffect
  useEffect(() => {
    if (!loading && !currentUser) {
      router.push("/Login");
    }
  }, [currentUser, loading, router]);

  // if (loading) {
  //     return <div>Loading...</div>
  // }

  if (loading) {
    return <ClipLoader color="#000" size={30} />;
  }

  if (!currentUser) {
    return null;
  }

  return children;
}
