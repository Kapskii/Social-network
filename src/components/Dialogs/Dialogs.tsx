import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import React, { ChangeEvent} from 'react'
import { ActionType, DialogsPageType } from '../../redux/types'
import { sendMessageAC, updagteNewMessageTextAC } from '../../redux/state'

type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}


export const Dialogs = (props: PropsType) => {

    const sendMessage = () => {
        props.dispatch(sendMessageAC())
    }

const onChangeMessageHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
    let newMessageText = event.currentTarget.value;
    props.dispatch(updagteNewMessageTextAC(newMessageText))
}


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialog.map(el => <DialogItem id={el.id} name={el.name} />)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.message.map(el => <Message message={el.message} />)}
                <textarea
                    placeholder='Enter your message...'
                    onChange={onChangeMessageHandler}
                    value={props.dialogsPage.newMessageText}
                >
                </textarea>

                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    )
}