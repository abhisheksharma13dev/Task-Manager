import Sidebar from "@/components/Dashboard/Functions/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="team-layout">
        <Sidebar />
        <div className="dashboard-main">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}