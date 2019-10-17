import React from 'react';

function Header(props) {
  return (
    <div className={`header-wrapper ${ props.editMode && "header-edit-mode" }`}>
        <div className="logo-wrapper">
            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571160822/Work/gopick-logo.png" alt="logo" className="gopick-logo"/>
        </div>
        <div className="header-search-wrapper">
            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571182052/Work/search-icon.png" alt="search"/>
            <span>Search Products and Reviews</span>
        </div>
        <div className="myfeed-wrapper">
            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571192272/Work/house.png" alt="feed"/>
            <span className="header-myfeed-text pl-2">My Feed</span>
        </div>
        <div className="rewards-wrapper">
            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571192819/Work/gift-box.png" alt="rewards"/>
            <span className="header-rewards-text pl-2">Rewards</span>
        </div>
        <div className="notification-wrapper">
            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571193088/Work/alert.png" alt="notification"/>
        </div>

        <div className="profile-image-wrapper">
            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571226636/Work/profile-picture.png" height="33" width="32" alt="pro-pic"/>
        </div>

        <div className="post-review-wrapper">
            <span className="post-review">Post Review</span>
        </div>
    </div>
  );
}

export default Header;
