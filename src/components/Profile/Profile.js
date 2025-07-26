// "use client"
// import { auth, db } from "@/lib/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import DashboardHeader from "../Dashboard/Functions/DashboardHeader";
// import QuickStats from "../Dashboard/Functions/QuickStats";
// import ActivityGraph from "../Dashboard/Functions/ActivityGraph";
// import Meetings from "../Dashboard/Functions/Meetings";
// import TaskBoard from "../Dashboard/Functions/TaskBoard";

// export default function Team() {
//   const [tasks, setTasks] = useState([]);
//   const [meetings, setMeetings] = useState([]);
//   const [activityData, setActivityData] = useState([]);

//   useEffect(() => {
//     const uid = auth.currentUser?.uid;
//     if (uid) {
//       fetchTasks(uid);
//       fetchMeetings(uid);
//       fetchActivityData(uid);
//     }
//   }, []);

//   const fetchTasks = async (uid) => {
//     try {
//       const querySnapshot = await getDocs(
//         collection(db, "users", uid, "tasks")
//       );
//       const taskList = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setTasks(taskList);
//     } catch (err) {
//       console.error("Error fetching tasks:", err);
//     }
//   };

//   const fetchMeetings = async (uid) => {
//     try {
//       const querySnapshot = await getDocs(
//         collection(db, "users", uid, "meetings")
//       );
//       const meetingsList = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setMeetings(meetingsList);
//     } catch (err) {
//       console.error("Error fetching meetings:", err);
//     }
//   };

//   const fetchActivityData = async (uid) => {
//     setActivityData([
//       { day: "Thu", value: 5 },
//       { day: "Fri", value: 8 },
//       { day: "Sat", value: 3 },
//       { day: "Sun", value: 0 },
//       { day: "Mon", value: 6 },
//       { day: "Tue", value: 4 },
//     ]);
//   };

//   const [teamMembers, setTeamMembers] = useState([]);

//   useEffect(() => {
//     const uid = auth.currentUser?.uid;
//     if (uid) {
//       fetchTasks(uid);
//       fetchMeetings(uid);
//       fetchActivityData(uid);
//       fetchTeamMembers(uid);
//     }
//   }, []);

//   const fetchTeamMembers = async (uid) => {
//     const mockTeamMembers = [
//       {
//         name: "Satnam Singh",
//         role: "Genghe Leader",
//         team: "Under 6 Team",
//         status: "Working Member",
//         performance: "Performance+"
//       },
//       {
//         name: "Ashish Sharma",
//         role: "Content Leader",
//         team: "Under 6 Team",
//         status: "Working Member",
//         performance: "Performance+"
//       },

//       {
//         name: "Ashish Sharma",
//         role: "Content Leader",
//         team: "Under 6 Team",
//         status: "Working Member",
//         performance: "Performance+"
//       },
//       {
//         name: "Ashish Sharma",
//         role: "Content Leader",
//         team: "Under 6 Team",
//         status: "Working Member",
//         performance: "Performance+"
//       },
//       {
//         name: "Ashish Sharma",
//         role: "Content Leader",
//         team: "Under 6 Team",
//         status: "Working Member",
//         performance: "Performance+"
//       },
//       {
//         name: "Ashish Sharma",
//         role: "Content Leader",
//         team: "Under 6 Team",
//         status: "Working Member",
//         performance: "Performance+"
//       },

//     ];
//     setTeamMembers(mockTeamMembers);
//   };

//   return (
//     <div className="dashboard-main">
//       <DashboardHeader user={auth.currentUser} />
//       <div className="dashboard-content">
//         <div className="content-left">
//           <QuickStats tasks={tasks} meetings={meetings} />
//           <div className="team-container">
//           <h2>Your Team</h2>
//           <div className="team-cards-grid">
//             {teamMembers.map((member, index) => (
//               <TeamCard key={index} member={member} />
//             ))}
//           </div>
//         </div>
//         </div>
//         <TaskBoard tasks={tasks} />
//       </div>
//     </div>
//   );
// }

// new code

"use client";
import "./Profile.css";

export default function Profile () {

const profileData = {
  name: "John Doe",
  title: "Senior UI/UX Designer",
  company: "Tech Solutions Inc.",
  age: 32,
  location: "San Francisco, CA",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  about:
    "I'm a creative designer with 8+ years of experience crafting beautiful digital experiences. Specialized in user-centered design, prototyping, and design systems. Passionate about solving complex problems through intuitive interfaces.",

    experties: [
          ["UI/UX Design", "Prototyping"],
      ["Design Systems", "User Research"],
      ["Frontend Development", ""]
    ],
    webLinks: [
          { icon: "@", platform: "johndoe" },
      { icon: "[in]", platform: "linkedin.com/johndoe", active: true },
      { icon: "[d]", platform: "dribbble.com/johndoe" }

    ],
    skills:  ["Figma", "Sketch", "Adobe XD", "HTML/CSS", "JavaScript", "React"],

    attatchments: [
              { name: "portfolio.pdf", checked: false },
      { name: "resume-2023.pdf", checked: true },
      { name: "case-study.pptx", checked: false }
    ]
    };
    
    return (
       <div className="profile-container">
        <div className="profile-header">
          <h1>{profileData.name}</h1>
          <div className="profile-subheader">
            <p><strong>{profileData.title}</strong></p>
            <p>Company: {profileData.company}</p>
            <p>Age: {profileData.age}</p>
            <p>From: {profileData.location}</p>
          </div>
          </div>

          {/* {contact details} */}
          <div className="contact-blocks">
            <div className="contact-block">
              <p><strong>{profileData.title}</strong></p>
              <p>{profileData.email}</p>
            </div>
            <div className="contact-block">
              <p>{profileData.location}</p>
              <p>{profileData.phone}</p>
            </div>
          </div>

          {/* {about section} */}

          <div className="profile-section">
            <h2>About</h2>
            <p className="about-text">{profileData.about}</p>
          </div>

          {/* {experties section} */}

          <div className="profile-section">
            <h2>Sector of expertise</h2>
            <div className="expertise-grid">
              {profileData.experties.map((row, i)=> (
                <div key={i} className="expertise-row">
                  {row.map((item, j)=> (
                    item && <span key={j}>{item}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* {web linksss} */}
{/* 
          <div className="profile-section">
            <h2>We are on the WEB</h2>
            <div className="web-links">
              {profileData.webLinks.map((link, i) => (
                <div key={i} className={`web-link ${link.active ? 'checked' : ''}`}>
                  <span className="web-icon">{link.icon}</span>
                  <span>{link.platform}</span>
                </div>
              ))}
          </div>
        </div> */}

        <div className="profile-section">
  <h2>We are on the WEB</h2>
  <div className="web-links">
    {profileData.webLinks.map((link, i) => (
      <div key={i} className={`web-link ${link.active ? 'checked' : ''}`}>
        <span className="web-icon">{link.icon}</span>
        <span>{link.platform}</span>
      </div>
    ))}
  </div> {/* This closing tag was missing */}
</div>
        

          
          {/* skills section */}
          <div className="profile-section">
            <h2>Skills</h2>
            <div className="skills-container">
              {profileData.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>


          {/* {attachment} */}
          <div className="profile-section">
            <h2>Attatchments</h2>
            <div className="attachments-list">
              {profileData.attatchments.map((file, i) => (
                <div key={i} className="attachment-item">
                  <input
                  type="checkbox"
                  id={`file-${i}`}
                  checked = {file.checked}
                  readOnly
                  />
                  <label htmlFor={`file-${i}`}>{file.name}</label>
                </div>
              ))}

            </div>
          </div>

       </div> 
    )
};

