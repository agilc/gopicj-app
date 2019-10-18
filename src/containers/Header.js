import React from 'react';
import gopickLogo from "assets/gopick-logo.png";
import searchIcon from "assets/search-icon.png";
import houseIcon from "assets/house.png";
import giftBoxIcon from "assets/gift-box.png";
import alertIcon from "assets/alert.png";
import profilePicture from "assets/profile-picture.png";

function Header(props) {
  return (
    <div className={`header-wrapper ${ props.editMode && "header-edit-mode" }`}>
        <div className="logo-wrapper">
            <img src={gopickLogo} alt="logo" className="gopick-logo"/>
        </div>
        <div className="header-search-wrapper">
            <img src={searchIcon} alt="search"/>
            <span>Search Products and Reviews</span>
        </div>
        <div className="myfeed-wrapper">
            <img src={houseIcon} alt="feed"/>
            <span className="header-myfeed-text pl-2">My Feed</span>
        </div>
        <div className="rewards-wrapper">
            <img src={giftBoxIcon} alt="rewards"/>
            <span className="header-rewards-text pl-2">Rewards</span>
        </div>
        <div className="notification-wrapper">
            <img src={alertIcon} alt="notification"/>
        </div>

        <div className="profile-image-wrapper">
            <img src={profilePicture} height="33" width="32" alt="pro-pic"/>
        </div>

        <div className="post-review-wrapper">
            <span className="post-review">Post Review</span>
        </div>
    </div>
  );
}

export default Header;
