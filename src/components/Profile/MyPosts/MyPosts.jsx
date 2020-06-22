import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators'
import { Textarea } from '../../Common/FormsController/FormsController'


const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
  let postsElement =
    props.posts.map((p) => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddMessageFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component={Textarea} name={'newPostText'} validate={[required, maxLength10]} placeholder='Enter your messague' />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts