"use client";

import "./Meetings.css";

// Group meetings by day for better performance
const groupMeetingsByDay = (meetings) => {
  const grouped = {};
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Initialize grouped object with all days
  days.forEach((day) => {
    grouped[day] = [];
  });

  // Group meetings by day
  (meetings || []).forEach((meeting) => {
    if (meeting.day && days.includes(meeting.day)) {
      grouped[meeting.day].push(meeting);
    }
  });

  return days.map((day) => ({
    day,
    events: grouped[day],
  }));
};

export default function Meetings({ meetings = [] }) {
  const groupedMeetings = groupMeetingsByDay(meetings);

  return (
    <div className="meetings-container">
      <div className="meetings-header">
        <h3>My Meetings</h3>
        <button className="add-meeting-btn">+</button>
      </div>
      <div className="meetings-list">
        {groupedMeetings.map((dayData) => (
          <div key={dayData.day} className="meeting-day">
            <span className="day">{dayData.day}</span>
            <div className="events">
              {dayData.events.length > 0 ? (
                dayData.events.map((event, i) => (
                  <div
                    key={event.id || i}
                    className={`event ${event.status || "default"}`}
                  >
                    {event.title || "Untitled Event"}
                  </div>
                ))
              ) : (
                <div className="no-event">-</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
