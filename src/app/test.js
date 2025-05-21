"use client"; // Required for interactivity (Next.js 13+)
import Sidebar from "@/components/Dashboard/Functions/Sidebar";

export default function Test() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar tasks={[]} /> {/* Pass empty tasks if needed */}
      <main style={{ marginLeft: "250px", padding: "20px" }}>
        <h1>Test Page</h1>
      </main>
    </div>
  );
}