// "use client"
// ye first code hai

// import LogoutButton from "@/components/auth/LogoutButton";
// import { onAuthStateChanged } from "firebase/auth";
// import { useState } from "react";
// import { useEffect } from "react";
// import { auth } from "@/lib/firebase"; // firebase auth
// import { useRouter } from "next/navigation"; // next js router for navigation 


// export default function Dashboard () {
//     const [currentUser, setCurrentUser] = useState(null);
//     const [loading, setLoading] =useState(true);
//     const [error, setError] = useState(null) // store auth errors
//     const router = useRouter(); // useRouter hook is used for client-side navigation between pages in your application.

//     // authentication state listner
//     useEffect(() => { 
//         let isMounted = true;  // flag to track component mount status

//         try {
//             //sub to firebase auth state changes
//             const unsubscribe = onAuthStateChanged(auth, (user) => { // automatically  redirect to login if no user is authenticated
//                 // skip if component is unmounted   
//                 if (!isMounted) return; 

//                 if (user) {
//                     setCurrentUser(user)
//                     console.log(currentUser)
//                 } else {
//                     try{
//                         router.push("/Login");  // try client side navigation / rendring
//                     } catch (e) {
//                         window.location.href= "/Login"; // fallback if routher is failed 
//                     }
//                 }
//                 setLoading (false)  // loading complete
//             });
//             return () => {
//                 isMounted = false;
//                 unsubscribe(); // remove auth state listner
//             };
//         } catch (err) {   
//             //handle any error in auth check
//             setError("Auth check failed");
//             setLoading(false)
//         }
        
//         }, []); // Empty dependency array means this runs once on mount

//         if (loading) return <div>Loading...</div>  // display loading
//         if (error) return <div> Error: {error}</div> // display error
 

//     return (
    

//         <div className="container">
//             <h1>Welcome, {currentUser?.email || "User"}!</h1>
//             <h1>Welcome, {currentUser?.firstName || "User"}!</h1>
//             <h1>Welcome, {currentUser?.email || "User"}!</h1>
//             <h3>hiiiiii, {currentUser?. lastName || "users"}</h3>
//             <LogoutButton/>
//         </div>
//     );

// }









// ye code thoda hila hua hai

// "use client"

// import ProtectedRoute from "@/components/ProtectedRoute";
// import { auth } from "@/lib/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { collection, getDocs } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react"
// import Sidebar from "./Functions/Sidebar";
// import DashboardHeader from "./Functions/DashboardHeader";
// import QuickStats from "./Functions/QuickStats";
// import ActivityGraph from "./Functions/ActivityGraph";
// import Meetings from "./Functions/Meetings";
// import TaskBoard from "./Functions/TaskBoard";

// export default function Dashboard () {

//     const [currentUser, setCurrentUser] = useState(null);
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null);
//     const [tasks,setTasks] = useState([]);
//     const [meetings, setMeetings] = useState([])
//     const [activityData, setActivityData] = useState([]);
//     const router = useRouter()

//     // Aunthintication state listner
//     useEffect(() => {
//         let isMounted = true

//         try {
//             const unsubscribe = onAuthStateChanged(auth, (user) => {
//                 if(!isMounted) return

//                 if (user) {
//                     setCurrentUser(user);
//                    fetchTasks(user.uid);
//                     fetchMeeting(user.uid);
//                     fetctActivityData(user.uid)
//                 } else {
//                     try {
//                         router.push("/Login")
//                     } catch (e) {
//                         window.location.href = "/Login"
//                     }
//                 }
//                 setLoading(false);
//             })
//             return () => {
//                 setError("Auth check failed");
//                 setLoading(false);
//             }
//         }
//     }, [router]);

//     // fetch taskfrom firebase
//     constfetchTasks = async (uid) => {
//         try  {
//             const querySnapshot = await getDocs (
//                 collection(db, "users", uid, "tasks")
//             );
//             const taskList = querySnapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data(),
//             }));
//             setTasks(taskList);
//         } catch (err) {
//             console.error("Error fetching tasks:", err);
//             setError("Failed to load tasks")
//         } 
//     } ;
//     //fetch activity data
//     const fetctActivityData = async (uid) => {
//         setActivityData([
//                 { day: "Thu", value: 5 },
//       { day: "Fri", value: 8 },
//       { day: "Sat", value: 3 },
//       { day: "Sun", value: 0 },
//       { day: "Mon", value: 6 },
//       { day: "Tue", value: 4 },
//         ]);

//     }
//      if (loading) return <div>Loading...</div>
//      if (error) return <div>Error: {error}</div>

//      return(
//         <ProtectedRoute>
//             <div className="dashboard-layout">
//                 <Sidebar tasks={tasks} />
//                 <div className="dashboard-main">
//                     <DashboardHeader user={currentUser} />
//                     <h1 className="welcome-title">Welcome to the Tasker System</h1>
//                     <QuickStats tasks={tasks} meetings={meetings} />
//                     <div className="dashboard-content">
//                         <div className="content-left">
//                             <ActivityGraph data={activityData} />
//                             <Meetings meetings={meetings} />
//                         </div>
//                         <TaskBoard tasks={tasks} />
//                     </div>
//                 </div>
//             </div>
//         </ProtectedRoute>
//      )
// }







































































// "use client";

// import ProtectedRoute from "@/components/ProtectedRoute";
// import { auth, db } from "@/lib/firebase"; // Added db import
// import { onAuthStateChanged } from "firebase/auth";
// import { collection, getDocs } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import Sidebar from "./Functions/Sidebar";
// import DashboardHeader from "./Functions/DashboardHeader";
// import QuickStats from "./Functions/QuickStats";
// import ActivityGraph from "./Functions/ActivityGraph";
// import Meetings from "./Functions/Meetings";
// import TaskBoard from "./Functions/TaskBoard";
// import "./Dashboard.css"; // Added CSS import

// export default function Dashboard() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [tasks, setTasks] = useState([]);
//   const [meetings, setMeetings] = useState([]);
//   const [activityData, setActivityData] = useState([]);
//   const router = useRouter();

//   // Authentication state listener
//   useEffect(() => {
//     let isMounted = true;

//     try {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//         if (!isMounted) return;

//         if (user) {
//           setCurrentUser(user);
//           fetchTasks(user.uid); // Corrected typo
//           fetchMeetings(user.uid); // Corrected typo
//           fetchActivityData(user.uid); // Corrected typo
//         } else {
//           try {
//             router.push("/login"); // Corrected to lowercase
//           } catch (e) {
//             window.location.href = "/login";
//           }
//         }
//         setLoading(false);
//       });

//       return () => {
//         isMounted = false;
//         unsubscribe(); // Proper cleanup
//       };
//     } catch (err) {
//       console.error("Auth check failed:", err);
//       setError("Auth check failed");
//       setLoading(false);
//     }
//   }, [router]);

//   // Fetch tasks from Firestore
//   const fetchTasks = async (uid) => { // Corrected typo
//     try {
//       const querySnapshot = await getDocs(
//         collection(db, "users", uid, "tasks")
//       );
//       const taskList = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setTasks(taskList);
//     } catch (err) {
//       console.error("Error fetching tasks:", err);
//       setError("Failed to load tasks");
//     }
//   };

//   // Fetch meetings from Firestore
//   const fetchMeetings = async (uid) => { // Added missing function
//     try {
//       const querySnapshot = await getDocs(
//         collection(db, "users", uid, "meetings")
//       );
//       const meetingsList = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setMeetings(meetingsList);
//     } catch (err) {
//       console.error("Error fetching meetings:", err);
//       setError("Failed to load meetings");
//     }
//   };

//   // Fetch activity data (mocked for now)
//   const fetchActivityData = async (uid) => { // Corrected typo
//     setActivityData([
//       { day: "Thu", value: 5 },
//       { day: "Fri", value: 8 },
//       { day: "Sat", value: 3 },
//       { day: "Sun", value: 0 },
//       { day: "Mon", value: 6 },
//       { day: "Tue", value: 4 },
//       ]);
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//       <ProtectedRoute>
//         <div className="dashboard-layout">
//           <Sidebar tasks={tasks} />
//           <div className="dashboard-main">
//             <DashboardHeader user={currentUser} />
//             <h1 className="welcome-title">Welcome to the Tasker System</h1>
//             <QuickStats tasks={tasks} meetings={meetings} />
//             <div className="dashboard-content">
//               <div className="content-left">
//                 <ActivityGraph data={activityData} />
//                 <Meetings meetings={meetings} />
//               </div>
//               <TaskBoard tasks={tasks} />
//             </div>
//           </div>
//         </div>
//       </ProtectedRoute>
//     );
//   }



























// src/components/Dashboard/page.js
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { auth, db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Sidebar from "./Functions/Sidebar";
import DashboardHeader from "./Functions/DashboardHeader";
import QuickStats from "./Functions/QuickStats";
import ActivityGraph from "./Functions/ActivityGraph";
import Meetings from "./Functions/Meetings";
import TaskBoard from "./Functions/TaskBoard";
import "./Dashboard.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const uid = auth.currentUser?.uid; // Access uid directly from auth
    if (uid) {
      fetchTasks(uid);
      fetchMeetings(uid);
      fetchActivityData(uid);
    }
  }, []);

  // Fetch tasks from Firestore
  const fetchTasks = async (uid) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", uid, "tasks")
      );
      const taskList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(taskList);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // Fetch meetings from Firestore
  const fetchMeetings = async (uid) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", uid, "meetings")
      );
      const meetingsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMeetings(meetingsList);
    } catch (err) {
      console.error("Error fetching meetings:", err);
    }
  };

  // Fetch activity data (mocked for now)
  const fetchActivityData = async (uid) => {
    setActivityData([
      { day: "Thu", value: 5 },
      { day: "Fri", value: 8 },
      { day: "Sat", value: 3 },
      { day: "Sun", value: 0 },
      { day: "Mon", value: 6 },
      { day: "Tue", value: 4 },
    ]);
  };

  return (
    <ProtectedRoute>
      <div className="dashboard-layout">
        <Sidebar tasks={tasks} />
        <div className="dashboard-main">
          <DashboardHeader user={auth.currentUser} />
          <h1 className="welcome-title">Welcome to the Tasker System</h1>
          <QuickStats tasks={tasks} meetings={meetings} />
          <div className="dashboard-content">
            <div className="content-left">
              <ActivityGraph data={activityData} />
              <Meetings meetings={meetings} />
            </div>
            <TaskBoard tasks={tasks} />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}