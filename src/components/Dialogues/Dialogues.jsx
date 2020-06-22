import React from "react"
import s from "./Dialogues.module.css"
import DialogueItem from "./DialogItem/Dialog"
import MessegeItem from "./MessageItem/Message"
import { reduxForm, Field } from "redux-form"
import { Textarea } from "../Common/FormsController/FormsController"
import { required, maxLengthCreator, } from "../../utils/validators"

const maxLengthCreator50 = maxLengthCreator(50)

const Dialogues = (props) => {
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map((d) => <DialogueItem name={d.name} key={d.id} id={d.id} />)
    let messageElements = state.messagues.map((m) => <MessegeItem message={m.message} key={m.id} id={m.id} />)

    let addNewMessage = (values) => {
        props.sendMessague(values.newMessagueBody)
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div >
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.window}>
            <div>
                <Field component={Textarea} validate={[required, maxLengthCreator50]} name={'newMessagueBody'} placeholder='Enter your messague' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogues