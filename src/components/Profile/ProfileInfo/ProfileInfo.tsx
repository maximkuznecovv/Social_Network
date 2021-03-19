import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.shortpixel.ai/spai/w_1024+q_glossy+ret_img+to_webp/https://wondersoftibet.com/wp-content/uploads/2018/10/Mount-Everest-view-from-Tibet-1024x249.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;