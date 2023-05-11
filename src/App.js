import React, { Fragment, useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import Header from "./Components/Header/Header";
import NewMessage from "./Components/NewMessage/NewMessage";
import MessagesList from "./Components/MessagesList/MessagesList";
import { sendMessageData } from "./store/chat-actions";
import { fetchMessageData } from "./store/chat-actions";
import classes from "./App.module.scss";

function App() {
  const messages = useSelector((state) => state.chat.messages);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch  = useDispatch();

  useEffect(()=>{
    dispatch(fetchMessageData());
  } , [dispatch])

  useEffect(()=>{
    dispatch(sendMessageData(messages));
  }, [messages  , dispatch])


  return (
    <div className={`${classes.app} ${!isDarkMode ? classes.light : '' }`}>
      <Header />
      <div className={classes["main-content"]}>
        {messages.length > 0 && <MessagesList />}
        <NewMessage />
      </div>
    </div>
  );
}

export default App;
