import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./profile.css"

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import { useSelector } from "react-redux";

const Profile = () => {

    const {name, nick, joined, following, followers, bgPhoto, profilePhoto, twitts} = useSelector(state => state.profile)

    return (
        <div className="profile_page">
            <div className="header_container">
                <div className="header">
                    <div className="header_header">
                        <div className="header_back_arrow">
                            <NavLink className="arrow_back" to='/'><ArrowBackIcon /></NavLink>
                        </div>
                        <div className="header_data">
                            <div className="header_name">{name}</div>
                            <div className="header_tweets">{twitts.length} Tweets</div>
                        </div>
                    </div>
                <div className="profile_pic_box">
                    {profilePhoto? <img className="profile_pic" src={profilePhoto} alt="profile photo" />: null}
                </div>
                </div>
                <div className="header_photo">
                    {bgPhoto? <img className="bgPhotoBox" src={bgPhoto} alt="background photo" />: null}
                </div>
            </div>
            <div className='profile_edit'>
                <button onClick={e => {
                    alert('set up button')
                }} className="profile_setup_button">Edit profile</button>
            </div>
            <div className="profile_main">
                <div className="profile_name">{name}</div>
                <div className="profile_nickName">{nick}</div>
                <div className="profile_joined"> <span className="date_icon"><DateRangeRoundedIcon fontSize="small" /></span> Joined {joined} </div>
                <div className="profile_follow">
                    <div className="profile_following">
                        <span className="followers_count">{following}</span> following
                    </div>
                    <div className="profile_followers">
                        <span className="followers_count">{followers}</span> followers
                    </div>
                </div>
                
            </div>
            <div className='header_footer'>
                Footer
            </div>
        </div>
    )
}

export default Profile;