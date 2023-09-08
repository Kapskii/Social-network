import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let dialogItemData = [
    { id: 1, name: 'Slava' },
    { id: 2, name: 'Olya' },
    { id: 3, name: 'Vadim' }
]

let messageData = [
    { id: 1, message: 'HI' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'Fine' },
]

let dialogs = dialogItemData.map(d => <DialogItem name={d.name} id={d.id} />);
let messages = messageData.map(m => <Message message={m.message} />)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;