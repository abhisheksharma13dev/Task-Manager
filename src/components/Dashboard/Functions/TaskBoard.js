"use client";
import "./TaskBoard.css";

export default function TaskBoard({}) {
  const taskCategories = [
    {
      title: "Post Of May",
      completed: 5,
      total: 15,
      worktime: "2h 12min",
      status: "Design",
    },
    {
      title: "Reel Of May",
      completed: 3,
      total: 3,
      worktime: "5h 52min",
      status: "Design",
    },
    {
      title: "Design On Web",
      completed: 2,
      total: 15,
      worktime: "5h 52min",
      status: "Design",
    },
    {
      title: "Google Sheet Maintain",
      completed: 0,
      total: 0,
      worktime: "13min",
      status: "Filled",
    },
  ];

  return (
    <div className="task-board">
      <div className="task-board-header">
        <h2>Task Board</h2>
        <button className="all-task-button">All Task</button>
      </div>

      {taskCategories.map((category, index) => (
        <div key={index} className="task-card">
          <h3>{category.title}</h3>
          <p>
            We Have Completed {category.completed} Out of{" "}
            {category.total || "Almost 15 Pannel"}
          </p>

          {category.total > 0 && (
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(category.completed / category.total) * 100}%`,
                }}
              ></div>
            </div>
          )}

          <div className="task-meta">
            <p>
              <strong>{category.total > 0 ? "Worktime" : "Speed"}</strong>{" "}
              {category.worktime}
            </p>
            <span className={`status ${category.status.toLowerCase()}`}>
              {category.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
