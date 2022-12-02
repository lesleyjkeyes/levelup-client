import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import EventCard from '../../components/event/EventCard';
import { getSingleEvent } from '../../utils/data/eventData';

function SingleEventView() {
  const router = useRouter();
  const { eventId } = router.query;
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getSingleEvent(eventId).then((data) => setEvent(data));
  }, [eventId]);

  useEffect(() => {
    console.warn(event);
  }, [event]);

  return (
    <article className="events">
      <h1>{event.title}</h1>
      <EventCard game={event.game} description={event.description} date={event.date} time={event.time} eventId={event.id} />
    </article>
  );
}

export default SingleEventView;
