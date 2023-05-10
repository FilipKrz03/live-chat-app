import React from "react";
import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";
import classes from './MessagesList.module.scss';

const MessagesList = () => {

    const messages = useSelector(state => state.chat.messages);

    const messageList = messages.map(item => {
        return (
            <MessageItem
            key = {item.id}
            id = {item.id}
            messageBody = {item.messageBody}
            nickname = {item.nickname}
            month = {item.month}
            day = {item.day}
            />
        )
    });

    return (
        <div className={classes['message-box']}>
            <h2>Chat</h2>
            {messageList}
        </div>
    )

}

export default MessagesList;