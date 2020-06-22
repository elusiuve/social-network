import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0])
    }
  }
  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => { setEditMode(false) })
  }

  return (
    <div>
      <div>
        <img className={s.sunnyDay} src='https://cs7.pikabu.ru/post_img/big/2017/12/27/6/1514366899147280970.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} />
        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <div> {editMode
          ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
        </div>
        <div>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  )
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (<div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
      <b>Full name </b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job </b>: {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    {
      profile.lookingForAJob &&
      <div>
        <b>My professional skills </b>: {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me</b> : {profile.aboutMe}
    </div>
    <div className={s.contacts}>
      <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} ContactValue={profile.contacts[key]} />
      })}
    </div>
  </div>)
}

const Contact = ({ contactTitle, ContactValue }) => {
  return <div><b>{contactTitle}</b>: {ContactValue}</div>
}
export default ProfileInfo