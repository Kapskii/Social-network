import s from './AddPostForm.module.css'


export const AddPostForm = ()  => {
    return (
  <form className={s.formWrapper}>
        <textarea className={s.formElement} placeholder='Enter your text...'/>
        <button type='submit' className={s.addPost} id='button'>Add Post</button>
      </form>
    )
  }