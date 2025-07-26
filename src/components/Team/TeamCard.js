// components/TeamCard.js
// "use client"

// export default function TeamCard({ member }) {
//   return (
//     <div className="team-card">
//       <h3 className="team-card-name">{member.name}</h3>
//       <p className="team-card-role">{member.role}</p>
//       <p className="team-card-team">{member.team}</p>
//       <p className="team-card-status">{member.status}</p>
//       <p className="team-card-performance">{member.performance}</p>
//     </div>
//   );
// }





// components/TeamCard.js
"use client"

export default function TeamCard({ member }) {
  return (
    <div className="team-card">
      <div className="card-header">
        <div className="profile-photo-empty">
          {/* Empty profile photo placeholder */}
          <div className="empty-photo"></div>
        </div>
        <div className="header-info">
          <h3 className="team-card-name">{member.name}</h3>
          <p className="team-card-role">{member.role}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="team-card-team">{member.team}</p>
        <p className="team-card-status">{member.status}</p>
        <div className="performance-rating">
          <div className="stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <span className="performance-plus">Performance+</span>
        </div>
      </div>
    </div>
  );
}