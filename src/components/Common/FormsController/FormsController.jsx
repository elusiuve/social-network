import React from 'react'
import styles from './FormsController.module.css'
import { Field } from 'redux-form'

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError && styles.formControl}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError && styles.formControl}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} validators={validators} component={component} {...props} /> {text}
    </div>
)
