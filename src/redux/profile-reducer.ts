import {ActionsType, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState: ProfilePageType = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = (postText: string) => {
    return {type: ADD_POST, postText: postText} as const
}
export const updateNewPostTextActionCreator = (postText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: postText} as const
}