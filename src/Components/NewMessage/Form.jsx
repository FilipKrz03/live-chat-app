import React from "react";
import { useDispatch } from "react-redux";
import { chatActions } from "../../store/chat-slice";
import useInput from "../../hooks/useInput";
import classes from "./Form.module.scss";

const Form = () => {

  const dispatch = useDispatch();

  const {
    inputValue: nickInputValue,
    hasError: nickHasError,
    isValid : nickIsValid , 
    blurHandler: nickBlurHandler,
    changeHandler: nickChangeHandler,
    reset: nickResetHandler,
  } = useInput((value) => value.length > 2);

  const {
    inputValue: messageInputValue,
    hasError: messageHasError,
    isValid : messageIsValid , 
    blurHandler: messageBlurHandler,
    changeHandler: messageChangeHandler,
    reset: messageResetHandler,
  } = useInput((value) => value.length > 0);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const data = new Date();
    dispatch(chatActions.addMessage({
      id: Math.random() , 
      nickname : nickInputValue , 
      messageBody : messageInputValue , 
      month : data.getMonth() , 
      day : data.getDate() ,
    }));
    nickResetHandler();
    messageResetHandler();
  };

  let isFormInvalid = !messageIsValid || !nickIsValid;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.inputs}>
        <div className={classes["input-item"]}>
          <label htmlFor="nick">Enter your nick</label>
          <input
            className={nickHasError ? classes.invalid : ''}
            type="text"
            placeholder="Enter your nickname"
            value={nickInputValue}
            onChange={nickChangeHandler}
            onBlur={nickBlurHandler}
          />
          {nickHasError && (
            <p className={classes.error}>Nick length must be {">"} 2 </p>
          )}
        </div>
        <div className={classes["input-item"]}>
          <label htmlFor="message">Enter your message</label>
          <input
            className={messageHasError ?  classes.invalid : ''}
            type="text"
            placeholder="Enter you message"
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            value={messageInputValue}
          />
          {messageHasError && (
            <p className={classes.error}>Message length must be {">"} 0 </p>
          )}
        </div>
      </div>
      <button type="submit" disabled={isFormInvalid}>
        Post message
      </button>
    </form>
  );
};

export default Form;
