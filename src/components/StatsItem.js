import React from 'react';

function StatsItem(prop) {
	let { count, label } = prop;
  return (
    <div className="d-flex flex-column flex-grow-1">
			<span className="profile-stat-value">{count}</span>
			<span className="profile-stat-label">{label}</span>
		</div>
  );
}

export default StatsItem;
