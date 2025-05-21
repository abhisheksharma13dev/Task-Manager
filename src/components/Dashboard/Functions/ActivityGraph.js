"use client"

export default function ActivityGraph ({data}) {
    const maxValue = Math.max(...data.map((d) => d.value), 1);

    return(
        <div className="activity-graph">
            <h3>Activity</h3>
            <div className="graph-tabs">
                <button>Week</button>
                <button>Month</button>
            </div>

            <div className="graph">
                {data.map((item, index) => (
                    <div key={index} className="bar-container">
                        <div 
                        className="bar"
                        style={{
                            height: `${(item.value / maxValue) * 100}%`,
                            backgroundColor:item.day === "Sat" ? "#6b48ff" : "#d3d3d3",
                        }}
                        >
                    </div>
                    <span>{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );


}
