"use client"

export default function QuickStats({tasks, meetings}) {
    const deadlines = [
        { time: "12:00pm", color: "red" },
    { time: "4:00pm", color: "yellow" },
    { time: "9:00pm", color: "green" },
    ]

    return(
        <div className="quick-stats">
            <div className="stats-card">
                <h3>Deadline</h3>
                {deadlines.map((deadlines, index) => (
                    <div key={index} className="deadline-item">
                        <span 
                        className="deadline-dot"
                        style={{backgroundColor:deadlines.color}}
                        ></span>
                        {deadlines.time}
                    </div>

                ))}
            </div>
            <div className="stat-card">
                <h3>Tasks</h3>
                <p>Total {tasks.length} Pending Task</p>
                <p>In Running</p>
                <p>ETA</p>
            </div>
            <div className="stat-card">
        <h3>Meeting</h3>
        <p>Today {meetings.length} Meetings</p>
        <p>1: Am With CEO</p>
        <p>2: Pm With Juniors</p>
        <p>4: Pm With Senior</p>
      </div>
        </div>
    )

}