import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import React from 'react'

type PropsType = {
    dialogsDate: DialogsDateType[]
    messageDate: MessageDateType[]
}

export type DialogsDateType = {
    id: string
    name: string
}

export type MessageDateType = {
    id: string
    message: string
}

export const Dialogs = (props: PropsType) => {

    let messageText = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {
        let text = messageText.current?.value;
        alert(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsDate.map(el => <DialogItem id={el.id} name={el.name} />)}
            </div>
            <div className={s.messages}>
                {props.messageDate.map(el => <Message message={el.message} />)}
                <textarea ref={messageText}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
            
        </div>
    )
}