import React ,  { Fragment } from "react";
import Header from "./Components/Header/Header";
import NewMessage from "./Components/NewMessage/NewMessage";
import classes from './App.module.scss';

function App() {
  return (
<Fragment>
 <Header />
<div className={classes['main-content']}>
<NewMessage />
</div>
 </Fragment>
  );
}

export default App;
