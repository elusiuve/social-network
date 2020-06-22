import React from "react";
import s from "./MessageItem.module.css";

const MessegeItem = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export default MessegeItem;