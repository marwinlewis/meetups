import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
  const navigate = useNavigate();

  let count = 0;

  function addMeetupHandler (meetupData) {
    fetch(
      'https://react-c5d6e-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      if (response.status === 200) navigate('/');
    });
  }

  return (
    <div>
      <h1>New Meetup page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetup;