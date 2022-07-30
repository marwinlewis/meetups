import React, { useContext } from "react";
import Card from "../ui/Card";
import classes from './MeetupItem.module.scss';
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const ctxFavourite = useContext(FavouritesContext);
  const isFavourite = ctxFavourite.isFavourite(props.id);

  function toggleFavouriteHandler() {
    if(isFavourite) ctxFavourite.removeFavourite(props.id);
    else ctxFavourite.addFavourite({
        key: props.id,
        id: props.id,
        image: props.image,
        title: props.title,
        description: props.description
      });
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} />
        </div>
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div>
          <button onClick={toggleFavouriteHandler}>{ isFavourite ? 'Remove from Favourites' : 'To Favourites' }</button>
        </div>
      </li>
    </Card>
  )
}

export default MeetupItem;