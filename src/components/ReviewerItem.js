import React from 'react';

function ReviewerItem(prop) {
	let { item } = prop;
  return (
    <div className="d-flex reviwers-list-item">
			<div className="d-flex">
				<div>
						<img src={item.image} alt="reviewer"/>
				</div>
				<div className="d-flex flex-column ml-1 mt-1">
						<span className="reviewers-list-name w-100">{item.name}</span>
						<span className="reviewers-list-count">{`${item.reviewCount} reviews`}</span>
				</div>
			</div>
			<div className="reviewers-list-follow-btn mt-2">
				<span>Follow</span>
			</div>
    </div>
  );
}

export default ReviewerItem;
