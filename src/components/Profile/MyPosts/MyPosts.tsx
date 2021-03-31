import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsType, PostType} from "../../../redux/store";
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElement = props.posts.map(p =>
        <Post id={p.id}
              message={p.message}
              likesCount={p.likesCount}/>)


    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text));

    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;