import React from "react"
import { NavLink } from "react-router-dom"
import s from './DialogItem.module.css'

type PropsType = {
    name: string
    id: string
}

export const DialogItem = (props: PropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}