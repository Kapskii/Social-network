import s from './AddPostForm.module.css'


export const AddPostForm = ()  => {
    return (
  <form className={s.formWrapper}>
        <textarea className={s.formElement}/>
        <button type='submit'>Add Post</button>
      </form>
    )
  }