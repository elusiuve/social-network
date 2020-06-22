import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogueItem = (props) => {
    let patch = '/dialogues/' + props.id;
    return (
        <div className={s.dialogue}>
            <NavLink to={patch}>{props.name}</NavLink>
        </div>
    )
};

export default DialogueItem;