"use client"

import LogoutButton from "@/components/auth/LogoutButton"

import "./DashboardHeader.css"

export default function DashboardHeader({user}) {

    return (
        <div className="dashboard-header">
            <input type="text" placeholder="Search" className="search-bar" />
            <div className="header-right">
                <span className="user-info">
                    {user?. displayName || "User"}
                </span>
                <LogoutButton className="logout-btn" redirectPath="/Login" />
            </div>
        </div>
    );
}