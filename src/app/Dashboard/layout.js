// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }




// import Sidebar from "@/components/Dashboard/Functions/Sidebar";
// import ProtectedRoute from "@/components/ProtectedRoute";
// import DashboardPage from "@/components/Dashboard/dashboard"
// export const metadata = {
//   title: "Tasker System",
//   description:  "A task management system",
// };

// export default function RootLayout  ({children}) {
//   return (
//     <html lang="en">
//       <body>
//         <ProtectedRoute>
//           <div className="dashboard-layout">
//             <Sidebar />
//             <div className="dashboard-main"><DashboardPage /></div>

//           </div>
//         </ProtectedRoute>
//       </body>
//     </html>
//   );
// }
// app/dashboard/layout.js
import Sidebar from "@/components/Dashboard/Functions/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-main">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}

