import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to="#/dialogs/1">Slava</NavLink>
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                <NavLink to="#/dialogs/2">Olya</NavLink>
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                <NavLink to="#/dialogs/3">Vadim</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>HI</div>
                <div className={s.message}>yo</div>
                <div className={s.message}>fine</div>
            </div>
        </div>
    )
}

export default Dialogs;