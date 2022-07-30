import React from "react";
import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.scss';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {
        props.meetups.map(meetup => {
          return <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            description={meetup.description}
          />
        })
      }
    </ul>
  )
}

export default MeetupList;