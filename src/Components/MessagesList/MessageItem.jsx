import React from "react";
import classes from './MessageItem.module.scss';

const MessageItem = props => {


    return (
        <div className={classes.item}>
             <span className={classes.nick}>{props.nickname}</span>
            <p className={classes.body}>{props.messageBody}</p>
            <span className={classes.date}>{props.month} - {props.day}</span>
        </div>
    )

}

export default MessageItem