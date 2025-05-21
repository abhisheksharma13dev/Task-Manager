"use client"

export default  function TaskBoard({tasks}) {
    const taskCategories = [
        { title: "Post Of ", completed: 5, total: 15, status: "Design" },
    { title: "Reel Of ", completed: 3, total: 3, status: "Designed" },
    { title: "Design On Web", completed: 2, total: 15, status: "Design" },
    { title: "", completed: 0, total: 0, status: "Filled" },
    ];

    return(
        <div className="task-board">
            <h2>All Task</h2>
            {taskCategories.map((category, index) => (
                <div key={index} className="task-card">
                    <h3>{category.title}</h3>
                    <p>We Have Completed {category.completed} Out of {category.total}</p>
                    <div className="progress-bar">
                        <div
                        className="progress"
                        style={{
                            width: `${(category.completed / category.total) * 100 || 0}%`,
                        }}
                   ></div>
                </div>
                <p>Worktime {category.total ? "52h.4m" : "13m"}</p>
                <span className={`status ${category.status.toLowerCase()}`}>
                    {category.status}
                </span>
                </div>
            ))}
        </div>
    );
}