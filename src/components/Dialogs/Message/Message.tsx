import React from "react"
import s from './Message.module.css'

type PropsMessageType = {
    message: string | undefined
}

export const Message = (props:PropsMessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}