import {Dispatch} from 'redux';
import {usersAPI} from '../API/api';
import {AppThunkType} from "./store";
import {authReducer} from './auth-reducer';


export enum PROFILE_ACTION_TYPE {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET_PROFILE_INFO-NEW-POST-TEXT',
}


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    'aboutMe': string | null
    'contacts': {
        'facebook': string | null
        'website': string | null
        'vk': string | null
        'twitter': string | null
        'instagram': string | null
        'youtube': string | null
        'github': string | null
        'mainLink': string | null
    },
    'lookingForAJob': string | null
    'lookingForAJobDescription': string | null
    'fullName': string | null
    'userId': number
    'photos': {
        'small': string | null
        'large': string | null
    }
}

const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ] as PostType[],
    profile: null as ProfileType | null,
}
export type ProfileReducerInitialStateType = typeof initialState

//type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextAC>

export const profileReducer = (state: ProfileReducerInitialStateType = initialState, action: profileActionsType): ProfileReducerInitialStateType => {

    switch (action.type) {
        case PROFILE_ACTION_TYPE.ADD_POST:
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
                    newPostText: ""
                }
            }
            return state;
        case PROFILE_ACTION_TYPE.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case PROFILE_ACTION_TYPE.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export type profileActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>

// Action Creators
export const addPostActionCreator = () => {
    return {type: PROFILE_ACTION_TYPE.ADD_POST} as const
}
export const updateNewPostTextAC = (postText: string) => {
    return {type: PROFILE_ACTION_TYPE.UPDATE_NEW_POST_TEXT, newText: postText} as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {type: PROFILE_ACTION_TYPE.SET_USER_PROFILE, profile} as const
}

// Thunk Creator
type ResponseType = {
    data: ProfileType
}
/*export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then((response: ResponseType) => {
            dispatch(setUserProfile(response.data))
        })*/
export const getUserProfile = (userId: string): AppThunkType => async dispatch => {
    try {
        const response: ResponseType = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    } catch (e) {
        throw new Error()
    }
}