import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { Button } from 'react-bootstrap';
import EventCard from '../../components/event/EventCard';
import { getEvents } from '../../utils/data/eventData';

function Home() {
  const [events, setEvents] = useState([]);

  const getAndSetEvents = () => {
    getEvents().then((data) => setEvents(data));
  };

  useEffect(() => {
    getAndSetEvents();
  }, []);

  const refresh = () => getAndSetEvents();

  return (
    <article className="events">
      <Button onClick={() => {
        Router.push('/events/new');
      }}
      >
        Register New Event
      </Button>
      <h1>Events</h1>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="event">
          <EventCard game={event.game} description={event.description} date={event.date} time={event.time} eventId={event.id} refresh={refresh} />
        </section>
      ))}
    </article>
  );
}

export default Home;
