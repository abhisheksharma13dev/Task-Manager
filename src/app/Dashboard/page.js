// import Dashboard from '@/components/Dashboard/dashboard'
// import ProtectedRoute from '@/components/ProtectedRoute'
// import React from 'react'

// function page() {
//   return (
   
//     <div>
//  <ProtectedRoute>
//     <Dashboard/>
//     </ProtectedRoute>
//     </div>
//   )
// }

// export default page

import DashboardPage from "@/components/Dashboard/dashboard";

export default function DashboardHome() {
  return <DashboardPage />;
}
