import React, {ChangeEvent} from "react";
import {StoreType, ActionsType, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


export type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

type MyPostsContainerPropsType = {
    store: StoreType
}


export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))
    }


    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))

    }

    return <MyPosts posts={state.profilePage.posts}
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={onPostChange}
    />
}
