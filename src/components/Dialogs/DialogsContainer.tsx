import React, {ChangeEvent} from 'react'
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";


type PropsType = {
    store: StoreType
}

export const DialogsContainer : React.FC<PropsType > = (props) => {
    const state = props.store.getState().dialogsPage


    const sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    const updateNewMessage = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs state={state}
                    updateNewMessageBody={updateNewMessage}
                    onSendMessage={sendMessage}
    />
}

