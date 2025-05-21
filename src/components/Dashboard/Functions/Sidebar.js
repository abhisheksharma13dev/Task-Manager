"use client"

import Link from "next/link"
import "./Sidebar.css"

export default function Sidebar ( {tasks} ) {
    const messages = [
        {
            user: "Abhishek (Techy)",
            messages: [
                {sender: "", time: ""},
                {sender: "", time: ""},
                {sender: "", time: ""},
            ],
        },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <span className="logo-icon">✨</span> Pro-manage
            </div>

            <nav className="sidebar-nav">
                <Link href= "/Dashboard" className="nav-item-activity">
                <span className="nav-icon">🏡</span> Dashboard
                </Link>

                <Link href= "/my-team" className="nav-item">
                <span className="nav-icon">👥</span> My Team
                </Link>

                <Link href="/task-list" className="nav-item">
                <span className="nav-icon">❌</span> My List
                {tasks.length > 0 && <span className="notification-badge">{tasks.length}</span>}
                </Link>

                <Link href="/profile" className="nav-item">
                <span className="nav-icon">🤦‍♀️</span> Profile
                </Link>

                <Link href="/messages" className="nav-item">
                <span className="nav-icon">✉</span> Message
                <span className="notification-badge"></span>
                </Link>
            </nav>

            <div className="message-preview">
                {messages.map((msg, index) => (
                    <div key={index} className="message-item">
                        <h4>{msg.user}</h4>
                        <p>Today</p>
                        {msg.messages.map((m, i) => (
                            <p key={i} className="message-text">
                                {m.sender}<span>{m.time}</span>
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )

}