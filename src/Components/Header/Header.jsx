import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import themeDark from "../../img/theme dark.png";
import themeLight from "../../img/theme-light.png";
import classes from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const themeSwitchHadnler = () => {
    dispatch(themeActions.toggleTheme());
  };

  return (
    <header className={classes.header}>
      <h1>Live chat React app</h1>
      {!isDarkMode && (
        <img
          src={themeDark}
          alt="theme switcher"
          className={classes.theme}
          onClick={themeSwitchHadnler}
        />
      )}
      {isDarkMode && (
        <img
          src={themeLight}
          alt="theme switcher"
          className={classes.theme}
          onClick={themeSwitchHadnler}
        />
      )}
    </header>
  );
};

export default Header;
