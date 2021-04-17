import React from 'react';
import s from './Profile.module.css';
import ProfileData from './ProfileData/ProfileData';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer'";

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileData profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;