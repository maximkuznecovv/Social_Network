import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profile-reducer";
import {AddMessageActionType, dialogsReducer, UpdateNewDialogMessageActionType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

 type MessageType = {
    id: number
    message: string
}
 type DialogType = {
    id: number
    name: string
}
 type PostType = {
    id: number
    message: string
    likesCount: number
}
 type ProfilePostType = {
    posts: Array<PostType>
    newPostText: string
}
 type DialogsPropsType = {
    newMessageBody: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
 type FriendsType = {
    id: number
    name: string
}
 type SidebarType = {
    friends: Array<FriendsType>
}
 type RootStateType = {
    profilePage: ProfilePostType
    dialogsPage: DialogsPropsType
    sidebar: SidebarType
}


 type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}


 type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewDialogMessageActionType

 let storeUnused: StoreType = { //OOP
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
            ],
        },
        dialogsPage: {
            newMessageBody: "",
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Viktor"},
                {id: 5, name: "Valera"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
        },
        sidebar: {
            friends: [
                {id: 1, name: "Max"},
                {id: 2, name: "Igor"},
                {id: 3, name: "Alex"},
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer //(observer(callback) - наблюдатель) - это паттерн
    },

    //dispatch action - отправить обьект (действие)
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }
}


// window.store = store