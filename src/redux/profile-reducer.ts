//import {ActionsType} from './redux-store';

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

// export type AddPostActionType = ReturnType<typeof addPostActionCreator>
// export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type PostType = {
    id: number
    message: string
    likesCount: number
}
/*export type ProfilePostType = {
    newPostText: string
    posts: Array<PostType>
}*/


const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ] as PostType[],
}
export type ProfileReducerInitialStateType = typeof initialState

type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextAC>

export const profileReducer = (state: ProfileReducerInitialStateType = initialState, action: ActionsType): ProfileReducerInitialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            const trimmedText = newPost.message
            if (trimmedText) {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }
            return state;
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextAC = (postText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: postText} as const
}