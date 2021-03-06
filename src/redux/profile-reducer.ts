import {profileAPI} from "../API/api";
import {AppThunkType} from "./store";


export enum PROFILE_ACTION_TYPE {
    ADD_POST = "APP/PROFILE/ADD-POST",
    SET_USER_PROFILE = "APP/PROFILE/SET_PROFILE_INFO-NEW-POST-TEXT",
    SET_STATUS = "APP/PROFILE/SET_STATUS",
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    "aboutMe": string | null
    "contacts": {
        "facebook": string | null
        "website": string | null
        "vk": string | null
        "twitter": string | null
        "instagram": string | null
        "youtube": string | null
        "github": string | null
        "mainLink": string | null
    },
    "lookingForAJob": string | null
    "lookingForAJobDescription": string | null
    "fullName": string | null
    "userId": number
    "photos": {
        "small": string | null
        "large": string | null
    }
}

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ] as PostType[],
    profile: null as ProfileType | null,
    status: "",
}
export type ProfileReducerInitialStateType = typeof initialState

//type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextAC>

export const profileReducer = (state: ProfileReducerInitialStateType = initialState, action: profileActionsType): ProfileReducerInitialStateType => {

    switch (action.type) {
        case PROFILE_ACTION_TYPE.ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
            }


        case PROFILE_ACTION_TYPE.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case PROFILE_ACTION_TYPE.SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export type profileActionsType = ReturnType<typeof addPostActionCreator>

    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

// Action Creators
export const addPostActionCreator = (newPostText: string) => {
    return {type: PROFILE_ACTION_TYPE.ADD_POST, newPostText} as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {type: PROFILE_ACTION_TYPE.SET_USER_PROFILE, profile} as const
}
export const setStatus = (status: string) => {
    return {type: PROFILE_ACTION_TYPE.SET_STATUS, status} as const
}

// Thunk Creator
export const getUserProfile = (userId: string): AppThunkType => async dispatch => {
    try {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    } catch (e) {
        console.warn(e)
    }
}
export const getStatus = (userId: string): AppThunkType => async dispatch => {
    try {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    } catch (e) {
        console.warn(e)
    }
}
export const updateStatus = (status: string): AppThunkType => async dispatch => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        throw new Error()
    }
}

/*export const updateStatus = (status: string): AppThunkType => dispatch => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}*/


// const handlers = {
//     [LOADING]: (state) => {
//         return {...state, isLoading: true}
//     },
//     DEFAULT: (state) => state,
// }
//
// export const userReducer = (state, action) => {
//     const handler = handlers[action.type] || handlers.DEFAULT
//     return handler(state, action)
// }