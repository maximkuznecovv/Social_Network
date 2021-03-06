//import React from 'react';
//import s from './ProfileData.module.css';
import React from "react";
import styles from "./ProfileData.module.css"
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import defaultUserPhoto from '../../../assets/images/userPhoto.png'
import EditableSpan from '../../common/EditableSpan/EditableSpan';

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}
const ProfileData = (props: PropsType) => {
    const {profile} = props

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://cdn.shortpixel.ai/spai/w_1024+q_glossy+ret_img+to_webp/https://wondersoftibet.com/wp-content/uploads/2018/10/Mount-Everest-view-from-Tibet-1024x249.jpg'/>
            </div>
            {/*<div className={s.descriptionBlock}>
                ava + description
            </div>*/}
            <div className={styles.profileData}>
                <img src={profile.photos.small ? profile.photos.small : defaultUserPhoto} alt="profile avatar"/>
                <div>
                    <h3>{profile.fullName}</h3>
                </div>

                <EditableSpan title={props.status} onChange={props.updateStatus}/>

                {profile.aboutMe && <div>
                    <h3>About me:</h3>
                    <span>{profile.aboutMe}</span>
                </div>}
                <div>
                    <h3>My contacts:</h3>
                    <ProfileContacts contacts={profile.contacts}/>
                </div>
                {profile.lookingForAJob && <div>
                    <h3>Ищу работу</h3>
                    {profile.lookingForAJobDescription}
                </div>}
            </div>
        </div>
    )
}

export default ProfileData;

type ProfileContactsType = {
    contacts: {
        "facebook": string | null
        "website": string | null
        "vk": string | null
        "twitter": string | null
        "instagram": string | null
        "youtube": string | null
        "github": string | null
        "mainLink": string | null
    }
}

const ProfileContacts = (props: ProfileContactsType) => {

    const netWork = Object.keys(props.contacts)
    const netWorkLinks = Object.values(props.contacts)

    netWork.map(key => (<div key={key}>{key}</div>))

    return (
        <div className={styles.wrapperContacts}>

            <div className={styles.contacts}>{netWork.map(key => {
                return (
                    <div>
                        {key}
                    </div>
                )
            })}
            </div>

            <div className={styles.contacts}>{netWorkLinks.map(value => {
                return (
                    <div key={value}>
                        {value ? value : "Не заполнено"}
                    </div>
                )
            })
            }</div>
        </div>
    )
}