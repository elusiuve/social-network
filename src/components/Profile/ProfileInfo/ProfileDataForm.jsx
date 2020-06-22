import React from 'react'
import { createField, Input, Textarea } from '../../Common/FormsController/FormsController'
import { reduxForm } from 'redux-form'
import s from './ProfileInfo.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (<form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={s.formSummeryError}>
            Incorrect email or password
            </div>}
        <div>
            <b>Full name </b>: {createField('Full name', 'fullName', [], Input)}

        </div>
        <div>
            <b>Looking for a job </b>: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>

        <div>
            <b>My professional skills </b>: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me</b> : {createField('About me', 'AboutMe', [], Textarea)}
        </div>
        <div className={s.contacts}>
            <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contacts}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                </div>
            })}
        </div>
    </form>)
}

const profileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default profileDataReduxForm