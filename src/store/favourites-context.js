import React, { createContext, useEffect, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (newFavourites) => {},
    removeFavourite: (meetupID) => {},
    isFavourite: (meetupID) => {}
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  useEffect(function() {
    const localFavouritesData = localStorage.getItem('favourites');
    if (localFavouritesData) {
      setUserFavourites(JSON.parse(localFavouritesData));
    }
  }, []);

  useEffect(function() {
    if(!!userFavourites.length)
      localStorage.setItem('favourites', JSON.stringify(userFavourites));
    else
      localStorage.setItem('favourites', '');
  }, [userFavourites]);

  function addFavouriteHandler(newFavourites){
    setUserFavourites(prevFavourites => {
      return prevFavourites.concat(newFavourites);
    });
  }

  function removeFavouriteHandler(meetupID) {
    setUserFavourites(prevFavourites => {
      return prevFavourites.filter(meetup => meetup.id !== meetupID);
    })
  }

  function isFavouriteHandler(meetupID) {
    return userFavourites.some(meetup => meetup.id === meetupID);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    isFavourite: isFavouriteHandler
  }

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesContext;