import React, {ChangeEvent} from "react";
import {StoreType, ActionsType, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from '../../../redux/StoreContext';


export type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

type MyPostsContainerPropsType = {
    store: StoreType
}


export const MyPostsContainer = () => {

   /* const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))
    }


    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))

    }*/

   /* return <MyPosts posts={state.profilePage.posts}
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={onPostChange}
    />*/

    return (
        <StoreContext.Consumer>
            {store => {

                const state =  store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.newPostText))
                }

                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))

                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )

}
