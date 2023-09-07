import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"#/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Slava' id='1' />
                <DialogItem name='Olya' id='2' />
                <DialogItem name='Vadim' id='3' />
            </div>
            <div className={s.messages}>
                <Message message='HI' />
                <Message message='Yo' />
                <Message message='Fine' />
            </div>
        </div>
    )
}

export default Dialogs;