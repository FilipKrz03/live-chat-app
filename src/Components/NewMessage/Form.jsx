import React from "react";
import classes from "./Form.module.scss";

const submitFormHandler = (event) => {
  event.preventDefault();
};

const Form = () => {
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.inputs}>
        <div className={classes["input-item"]}>
          <label htmlFor="nick">Enter your nick</label>
          <input type="text" placeholder="Enter your nickname" />
        </div>
        <div className={classes["input-item"]}>
          <label htmlFor="message">Enter your message</label>
          <input type="text" placeholder="Enter you message" />
        </div>
      </div>
      <button type="submit">Post message</button>
    </form>
  );
};

export default Form;
