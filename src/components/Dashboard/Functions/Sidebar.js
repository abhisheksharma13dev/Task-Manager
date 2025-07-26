"use client";

import Link from "next/link";
import "./Sidebar.css";
import ChatbotComponent from "../Chatbot/Chatbot";
import { usePathname } from 'next/navigation';

export default function Sidebar({ tasks = [] }) {
  const pathname = usePathname();
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <span className="logo-icon">✨</span> Pro-manage
      </div>

      {/* Welcome Message */}
      <div className="welcome-msg">
        <span className="welcome-seen"></span>
        Welcome to the Tasker System
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <Link href="/Dashboard" className={pathname === '/Dashboard' ? 'nav-item-activity' : 'nav-item'}>
          <span className="nav-icon">🏡</span> Dashboard
        </Link>

        <Link href="/my-team" className={pathname === '/my-team' ? 'nav-item-activity' : 'nav-item'}>
          <span className="nav-icon">👥</span> My Team
        </Link>

        <Link href="/dashboard/task-list" className="nav-item">
          <span className="nav-icon">❌</span> My List
          {tasks.length > 0 && (
            <span className="notification-badge">{tasks.length}</span>
          )}
        </Link>

        <Link href="/profile" className="nav-item">
          <span className="nav-icon">🤦‍♀️</span> Profile
        </Link>

        <Link href="/dashboard/messages" className="nav-item">
          <span className="nav-icon">✉</span> Message
        </Link>
      </nav>

      {/* Chatbot Section */}
      <div className="chatbot-section">
        <ChatbotComponent />
      </div>
    </div>
  );
}
