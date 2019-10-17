import React, { Component } from 'react';
import ReviewerItem from '../components/ReviewerItem';
import StatsItem from '../components/StatsItem';

class Profile extends Component {

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
            <ReviewerItem item={item}/>
        )
    )
    }

    render(){

        return (
            <div className="profile-wrapper">
                <div className="cover-photo-wrapper">
                    <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571229632/Work/cover-page.png" className="w-100" alt="cover"/>
                </div>
                <div className="profile-card-wrapper">
                    <div className="d-flex justify-content-center profile-card-image-wrapper">
                        <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571226636/Work/profile-picture.png" alt="pro-img"/>
                    </div>
                    <div className="profile-card">
                        <div className="profile-card-name">Srivasta Mudumby</div>
                        <div className="profile-card-tag">@technophie</div>
                        <div className="profile-card-edit-btn">
                            <span className="edit-profile-text">Edit Profile</span>
                        </div>
                        <div className="profile-desc-wrapper">
                            <span>Early Adaptor. Visual Learner.<br/>
                            Entrepreneur. Design aficionado!<br/>
                            Favorite hash - #Viral</span>
                        </div>
                        <div className="profile-link-wrapper float-left">
                            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571247454/Work/chain-links.png" alt="link"/>
                            <span>technophie.com</span>
                        </div>
                        <div className="profile-link-stat-wrapper mt-3">
                            <span className="profile-stat-text">STATS</span>
                            <div className="profile-stat-line"></div>
                        </div>

                        <div className="d-flex mr-4 mt-2">
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
                        <div className="profile-stat-line mt-3 w-100"></div>
                        <div className="d-flex mr-4 mt-2">
                            <StatsItem
                                count = "1.2M"
                                label = "Followers"
                            />
                            <StatsItem
                                count = "643"
                                label = "Following"
                            />
                        </div>
                    </div>
                </div>
                <div className="review-header-wrapper d-flex">
                    <div> 
                        <span className="srivatsa-s-reviews">Srivasta's Reviews</span>
                        <div className="d-flex">
                            <div className="srivatsa-s-reviews-rectangle"></div>
                            <div className="srivatsa-s-reviews-oval"></div>
                        </div>
                    </div>
                    <div> 
                        <span className="saved-drafts-text">Saved Drafts</span>
                    </div>
                    <div className="top-reviewers-text"> 
                        <span className="srivatsa-s-reviews">Top Reviewers</span>
                        <div className="d-flex">
                            <div className="srivatsa-s-reviews-rectangle"></div>
                            <div className="srivatsa-s-reviews-oval"></div>
                        </div>
                    </div>
        
                </div>
                <div className="review-wrapper">
                    <div className="review-headding"><span role="img" aria-label="thumps-up">👍</span>-It's all about that amazing Screen and Battery</div>
                    <div className="review-user d-flex">
                        <div>
                            <img src="https://res.cloudinary.com/dylz5aj3n/image/upload/v1571310570/Work/Bitmap_1.png" alt="review-img"/>
                        </div>
                        <div class="pl-2">
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
                <div className="reviewers-list-wrapper pb-2">
                    {this.getReviewersList()}
                </div>
                <div className="copyright-wrapper">
                    <div>© 2018 Legoto  About  Help Center  Terms  Privacy policy  Cookies  Blog  Jobs  Businesses  Developers</div>
                </div>
            </div>
          );
    }
}

export default Profile;
