import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
//import AddNewPostForm, { NewPostFormDataType } from "./AddNewPostForm";
import AddNewPostForm, {NewPostFormDataType} from './AddNewPostForm';


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElement = props.posts.map(p =>
        <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}/>)


    const onAddPost = (formData: NewPostFormDataType) => {
        props.addPost(formData.pastText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
