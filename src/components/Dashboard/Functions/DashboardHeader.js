"use client";

import LogoutButton from "@/components/auth/LogoutButton";
import "./DashboardHeader.css";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiBell, FiSettings } from "react-icons/fi";

export default function DashboardHeader({ user }) {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Apply dark mode class to body when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Check for saved theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowSettings(false);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    setShowNotifications(false);
  };

  return (
    <div className="dashboard-header">
      <input type="text" placeholder="Q Search" className="search-bar" />

      <div className="header-right">
        {/* Theme Toggle */}
        <div
          className="icon-container theme-toggle"
          onClick={toggleTheme}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
        </div>

        {/* Notifications */}
        <div
          className="icon-container notification-wrapper"
          onClick={toggleNotifications}
          title="Notifications"
        >
          <FiBell size={16} />
          <span className="notification-badge">3</span>

          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <h4>Notifications</h4>
                <small>3 new</small>
              </div>
              <div className="notification-item">
                <p>New message received</p>
                <small>2 minutes ago</small>
              </div>
              <div className="notification-item">
                <p>System update available</p>
                <small>1 hour ago</small>
              </div>
              <div className="notification-item">
                <p>Your profile was viewed</p>
                <small>3 hours ago</small>
              </div>
              <div className="notification-footer">
                <button>View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <div
          className="icon-container settings-wrapper"
          onClick={toggleSettings}
          title="Settings"
        >
          <FiSettings size={16} />

          {showSettings && (
            <div className="settings-dropdown">
              <div className="settings-header">
                <h4>Settings</h4>
              </div>
              <div className="settings-item">
                <FiSettings size={14} />
                <span>Account Settings</span>
              </div>
              <div className="settings-item">
                <FiSettings size={14} />
                <span>Privacy Settings</span>
              </div>
              <div className="settings-item">
                <FiSettings size={14} />
                <span>Notification Preferences</span>
              </div>
              <div className="settings-footer">
                <button>Advanced settings</button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <span className="user-info">{user?.displayName || "User"}</span>
          <div className="user-avatar">
            {user?.displayName?.charAt(0) || "U"}
          </div>
        </div>

        <LogoutButton className="logout-btn" redirectPath="/Login" />
      </div>
    </div>
  );
}
