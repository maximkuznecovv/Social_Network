import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import AddMessageForm, {MessageFormDataType} from "./AddMessageForm";


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const state = props.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messageElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);

    const addNewMessage = (formData: MessageFormDataType) => {
        props.onSendMessage(formData.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;