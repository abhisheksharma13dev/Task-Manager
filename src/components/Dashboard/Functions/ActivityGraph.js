// new code

"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import "./ActivityGraph.css"; // Import external CSS

export default function ActivityGraph({
  weekData = [],
  monthData = [],
  timeRanges = ["Week", "Month"],
  initialRange = "Week",
  colors = { active: "#6b48ff", inactive: "#e0e0e0" },
  showValues = true,
  dayOffThreshold = 0,
}) {
  const [activeRange, setActiveRange] = useState(initialRange);
  const [hoveredBar, setHoveredBar] = useState(null);

  // Default data if none provided (for development)
  const defaultWeekData = [
    { day: "SUN", value: 0 },
    { day: "MON", value: 70 },
    { day: "TUE", value: 0 },
    { day: "WED", value: 50 },
    { day: "THU", value: 60 },
    { day: "FRI", value: 80 },
    { day: "SAT", value: 30 },
  ];

  const defaultMonthData = [
    { day: "Week 1", value: 65 },
    { day: "Week 2", value: 80 },
    { day: "Week 3", value: 45 },
    { day: "Week 4", value: 0 },
  ];

  // Select appropriate data based on active range
  const currentData =
    activeRange === "Week"
      ? weekData.length > 0
        ? weekData
        : defaultWeekData
      : monthData.length > 0
      ? monthData
      : defaultMonthData;

  const maxValue = Math.max(...currentData.map((d) => d.value), 1);

  //   // use provided data for fallback or  defaults
  // const currentData = data.length > 0 ? (activeRange === 'Week' ? data.slice(-7) : data):
  // (activeRange === 'Week' ? defaultWeekData : defaultMonthData)

  // const maxValue = Math.max(...currentData.map(d =>d.value), 1);

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>ACTIVITY</h3>
        <div className="time-range-tabs">
          {timeRanges.map((range) => (
            <button
              key={range}
              className={`tab-btn ${activeRange === range ? "active" : ""}`}
              onClick={() => setActiveRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="activity-graph">
        {currentData.map((item, index) => {
          const isDayOff = item.value <= dayOffThreshold;
          const barHeight = (item.value / maxValue) * 100;
          const isHovered = hoveredBar === index;

          return (
            <div
              key={`${item.day}-${index}`}
              className="day-column"
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {isDayOff ? (
                <div className="day-off">Day Off</div>
              ) : (
                <div className="bar-container">
                  <div
                    className="bar"
                    style={{
                      height: `${barHeight}%`,
                      backgroundColor: isHovered
                        ? colors.active
                        : colors.inactive,
                    }}
                  />
                  {showValues && isHovered && (
                    <div className="bar-value">{item.value}</div>
                  )}
                </div>
              )}
              <div className="day-label">
                {activeRange === "Month" && item.day.includes("Week")
                  ? item.day.replace("Week", "W")
                  : item.day.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ActivityGraph.PropTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape ({
//       active: PropTypes.string,
//       inactive: PropTypes.string
//     }),
//   ),
//     showValues: PropTypes.bool,
//     dayOffThreshold:PropTypes.number
// };

// ActivityGraph.defaultProps = {
//   data: [],
//   timeRanges: ['Week', 'Month'],
//   initialRange: 'Week',
//   colors:{ active: '#6b48ff', inactive: '#e0e0e0' },
//   showValues: true,
//   dayOffThreshold: 0

ActivityGraph.propTypes = {
  weekData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
  monthData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
  timeRanges: PropTypes.arrayOf(PropTypes.string),
  initialRange: PropTypes.string,
  colors: PropTypes.shape({
    active: PropTypes.string,
    inactive: PropTypes.string,
  }),
  showValues: PropTypes.bool,
  dayOffThreshold: PropTypes.number,
};

ActivityGraph.defaultProps = {
  weekData: [],
  monthData: [],
  timeRanges: ["Week", "Month"],
  initialRange: "Week",
  colors: { active: "#6b48ff", inactive: "#e0e0e0" },
  showValues: true,
  dayOffThreshold: 0,
};
