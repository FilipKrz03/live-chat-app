import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import classes from './NewMessage.module.scss';

const NewMessage = () => {

    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return(
        <div className={`${classes['new-message']} ${!isDarkMode ? classes.light : ''}`}>
            <h2>Add new message</h2>
           <Form /> 
        </div>
        )
}

export default NewMessage;