import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import EventForm from '../../../components/event/EventForm';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleEvent } from '../../../utils/data/eventData';

const EditEvent = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const { user } = useAuth();
  const [event, setEvent] = useState();
  useEffect(() => {
    getSingleEvent(eventId).then(setEvent);
  }, [eventId]);
  return (
    <div>
      <h2>Update Event</h2>
      <EventForm user={user} eventObj={event} />
    </div>
  );
};

export default EditEvent;
