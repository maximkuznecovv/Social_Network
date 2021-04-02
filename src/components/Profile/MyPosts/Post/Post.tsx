import React from 'react';
import s from './Post.module.css';
import {PostType} from '../../../../redux/profile-reducer';

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;