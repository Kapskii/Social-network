import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'

type PropsType = {
    dialogsDate: Array<DialogsDateType>
    messageDate: Array<MessageDateType>
}

type DialogsDateType = {
    id: string
    name: string
}

type MessageDateType = {
    id: string
    message: string
}

export const Dialogs = (props: PropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsDate.map(el => <DialogItem id={el.id} name={el.name} />)}
            </div>
            <div className={s.messages}>
                {props.messageDate.map(el => <Message message={el.message} />)}
            </div>
        </div>
    )
}