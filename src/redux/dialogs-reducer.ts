import {ActionsType, DialogPageType} from "./store";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type AddMessageActionType = ReturnType<typeof sendMessageAC>
export type UpdateNewDialogMessageActionType = ReturnType<typeof updateNewMessageBodyAC>

let initialState: DialogPageType = {
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
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state
    }
}


export const sendMessageAC = () => {
    return {type: SEND_MESSAGE} as const
}
export const updateNewMessageBodyAC = (messageText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newText: messageText} as const
}