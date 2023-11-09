import s from './ProfileDate.module.css'

export const ProfileDate = () => {
    return (
        <div className={s.profileInfo}>
            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
            <div className={s.nameBlock}>
                <h2 className={s.profileName}>Slava Kapskij</h2>
                <span className={s.subTitle}>JS Developer</span>
            </div>
        </div>
    )
}