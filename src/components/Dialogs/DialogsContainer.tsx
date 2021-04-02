//import React, {ChangeEvent} from "react"
import {DialogsInitialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
//import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
//import {StoreContext} from "../../redux/StoreContext";
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

// type PropsType = {
//     store: StoreType
// }

/*export function DialogsContainer() {
    return (<StoreContext.Consumer>
        {store => {
            const state = store.getState().dialogsPage


            const sendMessage = () => {
                store.dispatch(sendMessageAC())
            }

            const updateNewMessage = (body: string) => {
                store.dispatch(updateNewMessageBodyAC(body))
            }
            return <Dialogs state={state}
                            updateNewMessageBody={updateNewMessage}
                            onSendMessage={sendMessage}
            />
        }}
    </StoreContext.Consumer>)
}*/


type MapStateToPropsType = {
    dialogsPage: DialogsInitialStateType;
}
type MapDispatchToPropsType = {
    onSendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMessage() {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody(body: string) {
            dispatch(updateNewMessageBodyAC(body))
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)