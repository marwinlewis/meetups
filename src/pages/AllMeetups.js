import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch('https://react-c5d6e-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      if(response.ok) return response.json();
      return false;
    }).then(data => {
      const meetups = [];
      for(const key in data) {
        meetups.push({
          id: key,
          ...data[key]
        });
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, [])

  if(isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetupPage;