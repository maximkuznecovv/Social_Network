import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void

}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElement =
        props.posts.map(p =>
            <Post key={p.id}
                  message={p.message}
                  likesCount={p.likesCount}/>)

    //let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        //if (newPostElement.current) {
        props.addPost()

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // const text = newPostElement.current?.value
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
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