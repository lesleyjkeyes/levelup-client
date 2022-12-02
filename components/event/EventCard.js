import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Router from 'next/router';

const EventCard = ({
  description,
  date,
  time,
  organizer,
  eventId,
}) => (
  <Card className="text-center">
    <Card.Header>{description}</Card.Header>
    <Card.Body>
      <Card.Text>{date}</Card.Text>
      <Card.Text> {time} </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Organized by: {organizer}</Card.Footer>
    <Button
      onClick={() => {
        Router.push(`/events/edit/${eventId}`);
      }}
    >
      Update Event
    </Button>
  </Card>
);

EventCard.propTypes = {
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  eventId: PropTypes.number.isRequired,
};

export default EventCard;
