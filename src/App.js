import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header/Header";
import NewMessage from "./Components/NewMessage/NewMessage";
import MessagesList from "./Components/MessagesList/MessagesList";
import classes from "./App.module.scss";

function App() {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <Fragment>
      <Header />
      <div className={classes["main-content"]}>
        {messages.length > 0 && <MessagesList />}
        <NewMessage />
      </div>
    </Fragment>
  );
}

export default App;
