import React from "react";
import classes from './Layout.module.scss';
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <main className={classes.main}>
        {props.children}
      </main>
    </>
  );
}

export default Layout;