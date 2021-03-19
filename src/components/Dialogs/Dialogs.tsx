import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {
    ActionsType,
    DialogPageType,
    sendMessageAC, updateNewMessageBodyAC,
} from "../../redux/state";


type DialogPropsType = {
    dialogsPage: DialogPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs: React.FC<DialogPropsType> = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messageElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>);
    const newMessageBody = props.dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;