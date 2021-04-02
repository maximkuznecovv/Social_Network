import {ActionsType} from "./redux-store";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type AddMessageActionType = ReturnType<typeof sendMessageAC>
export type UpdateNewDialogMessageActionType = ReturnType<typeof updateNewMessageBodyAC>

type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}

let initialState = {
    newMessageBody: "",
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Valera"},
    ] as DialogsType[],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ]as MessageType[]
}

export type DialogsInitialStateType = typeof initialState

export const dialogsReducer = (state: DialogsInitialStateType  = initialState, action: ActionsType): DialogsInitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageBody,
            }
            const trimmedText = state.newMessageBody.trim()
            if (trimmedText) {
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessageBody: ''
                }
            }
            return state
        default:
            return state
    }
}


export const sendMessageAC = () => {
    return {type: SEND_MESSAGE} as const
}
export const updateNewMessageBodyAC = (messageText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: messageText} as const
}