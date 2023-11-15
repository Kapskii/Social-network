import s from './Post.module.css'

type PropsType = {
    message: string | undefined
}

export const Post = (props:PropsType) => {
    return (
        <div className={s.item}>
            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
            <div>{props.message}</div>
        </div>
    )
}