"use client";


import { auth, db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import DashboardHeader from "./Functions/DashboardHeader";
import QuickStats from "./Functions/QuickStats";
import ActivityGraph from "./Functions/ActivityGraph";
import Meetings from "./Functions/Meetings";
import TaskBoard from "./Functions/TaskBoard";
import "./Dashboard.css";

export default function DashboardPage() {
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

  return (
    <div className="dashboard-main">
      <DashboardHeader user={auth.currentUser} />
      <div className="dashboard-content">
        <div className="content-left">
          <QuickStats tasks={tasks} meetings={meetings} />
          <ActivityGraph data={activityData} />
          <Meetings meetings={meetings} />
        </div>
        <TaskBoard tasks={tasks} />
      </div>
    </div>
  );
}