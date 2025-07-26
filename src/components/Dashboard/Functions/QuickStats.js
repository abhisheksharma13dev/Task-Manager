"use client";
import "./QuickStats.css";
import { FaRegClock, FaTasks, FaCalendarAlt } from "react-icons/fa";

export default function QuickStats({ tasks = [], meetings = [] }) {
  const deadlines = [
    { time: "12:00pm", color: "#FF5E5E" }, // red
    { time: "4:00pm", color: "#FFC145" }, // yellow
    { time: "9:00pm", color: "#00C875" }, //green
  ];

  const meetingList = ["CEO", "HR", "Junoir", "Senior"];

  return (
    <div className="quick-stats">
      {/* {deadline card} */}
      <div className="stat-card">
        <div className="card-header">
          <div className="card-title">
          {/* <FaRegClock className="card-icon" /> */}
            <h3>Deadline</h3>
          </div>
          {/* <span className="count-badge">Today{deadlines.length}</span> */}
        </div>
        <div className="deadlines-list">
          {deadlines.map((deadline, index) => (
            <div key={index} className="deadline-item">
              <span
                className="deadline-dot"
                style={{ backgroundColor: deadline.color }}
              />

              <span>{deadline.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* {tasks card} */}

      <div className="stat-card1">
        <div className="card-header">
          <div className="card-title">
            <FaTasks className="card-icon" />
            <h3>Tasks</h3>
          </div>
        </div>
        <div className="card-content">
          <p>Total {tasks.length} Pending Task</p>
          <p>{Math.floor(tasks.length * 0.6)} Task In Running</p>
          <p>3 Task Today ETA</p>
        </div>
      </div>

      {/* {meetings card} */}
      <div className="stat-card2">
        <div className="card-header">
          <div className="card-title">
            <FaCalendarAlt className="card-icon" />
            <h3>Meeting</h3>
          </div>
        </div>

        <div className="meetings-list">
          {meetingList.map((meeting, index) => (
            <p key={index}>
              {index + 1}. {meeting}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
