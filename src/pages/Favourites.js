import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavouritesContext from '../store/favourites-context';

function Favourites() {
  const ctxFavourite = useContext(FavouritesContext);
  return (
    <div>
      <h1>Favourites</h1>
      <MeetupList meetups={ctxFavourite.favourites} />
    </div>    
  );
}

export default Favourites;