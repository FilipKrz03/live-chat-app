import React from "react";
import Form from "./Form";
import classes from './NewMessage.module.scss';

const NewMessage = () => {
    return(
        <div className={classes['new-message']}>
            <h2>Add new message</h2>
           <Form /> 
        </div>
        )
}

export default NewMessage;