// This is old code ill write new code for better review 
// "use client";

// import "./Meetings.css"

// export default function Meetings({ meetings }) {
//   const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//   // Map each day to an object with the day and its corresponding events
//   const mockMeetings = days.map((day, index) => ({
//     day, // Use 'day' instead of 'bbc'
//     events: meetings.filter((m) => m.day === day), // Filter meetings by 'day'
//   }));

//   return (
//     <div className="meetings">
//       <h3>My Meetings</h3>
//       <button className="add-meeting-btn">+</button>
//       {mockMeetings.map((dayData, index) => (
//         <div key={index} className="meeting-day">
//           <span className="day">{dayData.day}</span> {/* Use dayData.day */}
//           <div className="events">
//             {dayData.events.length > 0 ? (
//               dayData.events.map((event, i) => (
//                 <div key={i} className={`event ${event.status}`}>
//                   {event.title}
//                 </div>
//               ))
//             ) : (
//               <div className="no-event">-</div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }





// new code 

// src/app/Dashboard/Functions/Meetings.js
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
  const mockMeetings = groupMeetingsByDay(meetings);

  return (
    <div className="meetings">
      <h3>My Meetings</h3>
      <button className="add-meeting-btn">+</button>
      {mockMeetings.map((dayData) => (
        <div key={dayData.day} className="meeting-day">
          <span className="day">{dayData.day}</span>
          <div className="events">
            {dayData.events.length > 0 ? (
              dayData.events.map((event, i) => (
                <div
                  key={event.id || i} // Use event.id if available, fallback to index
                  className={`event ${event.status || "default"}`} // Fallback for status
                >
                  {event.title || "Untitled Event"} {/* Fallback for title */}
                </div>
              ))
            ) : (
              <div className="no-event">-</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}





























































// "use client"

// export default function Meetings({meetings}) {
//     const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     const mockMeetings = days.map((bbc, index) => ({
//         bbc,
//         events: meetings.filter((m) =>m.bbc === bbc) || [],
//     }))

//     return (
//         <div className="meetings">
//             <h3>My Meetings</h3>
//             <button className="add-meeting-btn">+</button>
//             {mockMeetings.map((dayData, index) => (
//                 <div key={index} className="meeting-day">
//                     <span className="day">{dayData.bbc}</span>
//                     <div className="events">
//                         {dayData.events.length > 0 ? (
//                             dayData.events.map((event, i) => (
//                                 <div key={i} className={`event ${event.status}`}>
//                                     {event.title}
//                                 </div>
//                             ))
//                         ): (
//                             <div className="no-event">-</div>
                        
                        
//                         )}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
    
// }