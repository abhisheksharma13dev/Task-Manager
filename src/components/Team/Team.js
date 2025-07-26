"use client"
import { auth, db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import DashboardHeader from "../Dashboard/Functions/DashboardHeader";
import QuickStats from "../Dashboard/Functions/QuickStats";
import ActivityGraph from "../Dashboard/Functions/ActivityGraph";
import Meetings from "../Dashboard/Functions/Meetings";
import TaskBoard from "../Dashboard/Functions/TaskBoard";
import "./Team.css";
import TeamCard from "./TeamCard";

export default function Team() {
  const [tasks, setTasks] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (uid) {
      fetchTasks(uid);
      fetchMeetings(uid);
      fetchActivityData(uid);
    }
  }, []);

  const fetchTasks = async (uid) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", uid, "tasks")
      );
      const taskList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(taskList);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const fetchMeetings = async (uid) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", uid, "meetings")
      );
      const meetingsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMeetings(meetingsList);
    } catch (err) {
      console.error("Error fetching meetings:", err);
    }
  };

  const fetchActivityData = async (uid) => {
    setActivityData([
      { day: "Thu", value: 5 },
      { day: "Fri", value: 8 },
      { day: "Sat", value: 3 },
      { day: "Sun", value: 0 },
      { day: "Mon", value: 6 },
      { day: "Tue", value: 4 },
    ]);
  };
  // const [tasks, setTasks] = useState([]);
  // const [meetings, setMeetings] = useState([]);
  // const [activityData, setActivityData] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (uid) {
      fetchTasks(uid);
      fetchMeetings(uid);
      fetchActivityData(uid);
      fetchTeamMembers(uid);
    }
  }, []);

  const fetchTeamMembers = async (uid) => {
    // This is mock data - replace with your actual data fetching logic
    const mockTeamMembers = [
      {
        name: "Satnam Singh",
        role: "Genghe Leader",
        team: "Under 6 Team",
        status: "Working Member",
        performance: "Performance+"
      },
      {
        name: "Ashish Sharma",
        role: "Content Leader",
        team: "Under 6 Team",
        status: "Working Member",
        performance: "Performance+"
      },

      {
        name: "Ashish Sharma",
        role: "Content Leader",
        team: "Under 6 Team",
        status: "Working Member",
        performance: "Performance+"
      },
      {
        name: "Ashish Sharma",
        role: "Content Leader",
        team: "Under 6 Team",
        status: "Working Member",
        performance: "Performance+"
      },
      {
        name: "Ashish Sharma",
        role: "Content Leader",
        team: "Under 6 Team",
        status: "Working Member",
        performance: "Performance+"
      },
      {
        name: "Ashish Sharma",
        role: "Content Leader",
        team: "Under 6 Team",
        status: "Working Member",
        performance: "Performance+"
      },
      // Add other team members as needed
    ];
    setTeamMembers(mockTeamMembers);
    
    // If you have team members in Firestore, you would do something like:
    /*
    try {
      const querySnapshot = await getDocs(collection(db, "users", uid, "teamMembers"));
      const membersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTeamMembers(membersList);
    } catch (err) {
      console.error("Error fetching team members:", err);
    }
    */
  };

  return (
    <div className="dashboard-main">
      <DashboardHeader user={auth.currentUser} />
      <div className="dashboard-content">
        <div className="content-left">
          <QuickStats tasks={tasks} meetings={meetings} />
          <div className="team-container">
          <h2>Your Team</h2>
          <div className="team-cards-grid">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
        </div>
        <TaskBoard tasks={tasks} />
      </div>
    </div>
  );
}