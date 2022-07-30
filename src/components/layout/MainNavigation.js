import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.scss'

function MainNavigation() {
  return (
    <nav className={classes.navigation}>
      <p className='logo'>React Meetups</p>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>New Meetup</Link>
        </li>
        <li>
          <Link to='/favourites'>Favourites</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation;