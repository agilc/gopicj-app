import React, { Component } from 'react';
import ReviewerItem from '../components/ReviewerItem';
import StatsItem from '../components/StatsItem';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            editMode: false
        }
    }

    reviewersList = [
        {
            name: "Mark Taylor",
            reviewCount: "345",
            image: "https://res.cloudinary.com/dylz5aj3n/image/upload/v1571283446/Work/bitmap.png"
        },
        {
            name: "Effie Harper",
            reviewCount: "43",
            image: "https://res.cloudinary.com/dylz5aj3n/image/upload/v1571283446/Work/bitmap.png"
        },
        {
            name: "Zachary Hampton",
            reviewCount: "452",
            image: "https://res.cloudinary.com/dylz5aj3n/image/upload/v1571283446/Work/bitmap.png"
        },
        {
            name: "Randy Johnson",
            reviewCount: "123",
            image: "https://res.cloudinary.com/dylz5aj3n/image/upload/v1571283446/Work/bitmap.png"
        },
        {
            name: "Jared Olson",
            reviewCount: "123",
            image: "https://res.cloudinary.com/dylz5aj3n/image/upload/v1571283446/Work/bitmap.png"
        },
    ];

    getReviewersList = () => {
        return (this.reviewersList.map(item => 
            <ReviewerItem key={item.name} item={item}/>
        )
    )
    }

    render(){

        return (
            <div className="profile-wrapper">
                <div className="cover-photo-wrapper">
                    { this.props.editMode && <span className="change-header-photo">Change Header Photo</span>}
                    <img 
                        src={ 
                            this.props.editMode ? 
                            "https://res.cloudinary.com/dylz5aj3n/image/upload/v1571334150/Work/black-dog.jpg" 
                            : "https://res.cloudinary.com/dylz5aj3n/image/upload/v1571229632/Work/cover-page.png"
                        }
                        className="w-100" 
                        alt="cover"
                    />
                </div>
                <div className="profile-card-wrapper">
                    <div className="d-flex justify-content-center profile-card-image-wrapper">
                    { this.props.editMode && <span className="change-profile-photo">Change Profile <br/>Photo</span> }
                        <img 
                            src={
                                this.props.editMode ? 
                                "https://res.cloudinary.com/dylz5aj3n/image/upload/v1571334891/Work/girl-black-bg.png"
                                : "https://res.cloudinary.com/dylz5aj3n/image/upload/v1571226636/Work/profile-picture.png" 
                                }
                            alt="pro-img"
                        />
                    </div>
                    <div className="profile-card">
                        <div className={`profile-card-name ${ this.props.editMode && "profile-website-wrapper"}`}>Srivasta Mudumby</div>
                        <div className={this.props.editMode ? "profile-card-tag-blue text-blue" : "profile-card-tag" }>@technophie</div>
                        <div 
                            onClick = { () => this.props.updateEditMode(true)} 
                            className={`profile-card-edit-btn ${ this.props.editMode && "d-none"}`}
                        >
                            <span className="edit-profile-text">
                                Edit Profile
                            </span>
                        </div>
                        <div className={`profile-desc-wrapper ${ this.props.editMode && "d-none"}`}>
                            <span>Early Adaptor. Visual Learner.<br/>
                            Entrepreneur. Design aficionado!<br/>
                            Favorite hash - #Viral</span>
                        </div>
                        <div className={`profile-link-wrapper float-left ${ this.props.editMode && "d-none"}`}>
                            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571247454/Work/chain-links.png" alt="link"/>
                            <span>technophie.com</span>
                        </div>
                        <div className={`profile-link-stat-wrapper mt-3 ${ this.props.editMode && "d-none"}`}>
                            <span className="profile-stat-text">STATS</span>
                            <div className="profile-stat-line1"></div>
                        </div>

                        <div className={`mr-4 mt-2 profile-stats-data ${ this.props.editMode ? "d-none" : "d-flex"}`}>
                            <StatsItem
                                count = "576"
                                label = "Reviews"
                            />
                            <StatsItem
                                count = "1.2M"
                                label = "Views"
                            />
                            <StatsItem
                                count = "1.2K"
                                label = "Upvotes"
                            />
                        </div>
                        <div className={`profile-stat-line mt-3 w-100 ${ this.props.editMode && "d-none"}`}></div>
                        <div className={`mr-4 mt-2 profile-stats-data ${ this.props.editMode ? "d-none" : "d-flex"}`}>
                            <StatsItem
                                count = "1.2M"
                                label = "Followers"
                            />
                            <StatsItem
                                count = "643"
                                label = "Following"
                            />
                        </div>

                        <div className={`profile-website-wrapper ${ !this.props.editMode && "d-none"}`}>
                            <span style={{letterSpacing: "-0.8px"}}>
                                Early Adaptor. Visual Learner. Entrepreneur. Design aficionado! Favorite hash - <span className="text-blue">#Viral</span>
                            </span>
                        </div>

                        <div className={`profile-website-wrapper ${ !this.props.editMode && "d-none"}`}>
                            <span>Hyderabad</span>
                        </div>

                        <div className={`profile-website-wrapper ${ !this.props.editMode && "d-none"}`}>
                            <span>Website</span>
                        </div>

                        <div 
                            onClick = { () => this.props.updateEditMode(false)}
                            className={`profile-card-update-btn ${ !this.props.editMode && "d-none"}`}
                        >
                            <span className="update-profile-text">
                                Update
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`review-header-wrapper d-flex ${ this.props.editMode && "edit-mode-opacity"}`}>
                    <div> 
                        <span className="srivatsa-s-reviews">Srivasta's Reviews</span>
                        <div className={ this.props.editMode ? "d-none" : "d-flex"}>
                            <div className="srivatsa-s-reviews-rectangle"></div>
                            <div className="srivatsa-s-reviews-oval"></div>
                        </div>
                    </div>
                    <div> 
                        <span className={`saved-drafts-text ${ this.props.editMode && "d-none"}`}>Saved Drafts</span>
                    </div>
                    <div className={`top-reviewers-text ${ this.props.editMode && "d-none"}`}> 
                        <span className="srivatsa-s-reviews">Top Reviewers</span>
                        <div className="d-flex">
                            <div className="srivatsa-s-reviews-rectangle"></div>
                            <div className="srivatsa-s-reviews-oval"></div>
                        </div>
                    </div>
        
                </div>
                <div className={`review-wrapper ${ this.props.editMode && "edit-mode-opacity"}`}>
                    <div className="review-headding"><span role="img" aria-label="thumps-up">👍</span>-It's all about that amazing Screen and Battery</div>
                    <div className="review-user d-flex">
                        <div>
                            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571310570/Work/Bitmap_1.png" alt="review-img"/>
                        </div>
                        <div className="pl-2">
                            <div className="review-user-name">The Verge</div>
                            <div className="review-user-count">2k Reviews</div>
                        </div>
                    </div>
                    <div className="review-msg">With the OnePlus 3T, we got virtually the same body as the OnePlus 3, 
                    but packed with a new processor, more RAM, and a bigger battery. yet, and the 6-8 GB of RAM offered 
                    in the OnePlus 5 was already the highest the industry had ever seen. <span className="text-more">(readmore)</span></div>
        
                    <div className="review-image-wrapper">
                        <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571311817/Work/onepluslarge.png" alt="review-img"/>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center review-star-wrapper">
                            <div>
                                <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571311247/Work/star.jpg" alt="product"/>
                            </div>
                            <div className="review-star-count">0</div>
                        </div>
                        <div className="d-flex align-items-center review-product-details-wrapper">
                            <div>
                                <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571310876/Work/oneplus6t.png" alt="product"/>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="review-product-name">Oneplus 6T</span>
                                <span className="review-product-name-review-count">1.4k reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* List of top reviewers */}
                <div className={`reviewers-list-wrapper pb-2 ${ this.props.editMode && "d-none"}`}>
                    {this.getReviewersList()}
                </div>
                <div className={`copyright-wrapper ${ this.props.editMode && "edit-mode-opacity"}`}>
                    <div>© 2018 Legoto  About  Help Center  Terms  Privacy policy  Cookies  Blog  Jobs  Businesses  Developers</div>
                </div>
            </div>
          );
    }
}

export default Profile;
