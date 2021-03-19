export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    newMessageBody: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type FriendsType = {
    id: number
    name: string
}
export type SidebarType = {
    sidebar: SidebarFriends
}
export type SidebarFriends = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarFriends
}


export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    //updateNewPostText: (newText: string) => void
    //addPost: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type AddMessageActionType = ReturnType<typeof sendMessageAC>
type UpdateNewDialogMessageActionType = ReturnType<typeof updateNewMessageBodyAC>

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewDialogMessageActionType

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const addPostActionCreator = (postText: string) => {
    return {type: ADD_POST, postText: postText} as const
}
export const updateNewPostTextActionCreator = (postText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: postText} as const
}
export const sendMessageAC = () => {
    return {type: SEND_MESSAGE} as const
}
export const updateNewMessageBodyAC = (messageText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newText: messageText} as const
}

// type AddPostActionType = {
//     type: 'ADD-POST',
//     postText: string
// }
//
// type  UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newText: string
// }

export let store: StoreType = { //OOP
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
            ],
        },
        dialogsPage: {
            newMessageBody: '',
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Max'},
                {id: 2, name: 'Igor'},
                {id: 3, name: 'Alex'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer //(observer(callback) - наблюдатель) - это паттерн
    },

    //dispatch action - отправить обьект (действие)
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newText
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber()
        }
    }
}


// window.store = store