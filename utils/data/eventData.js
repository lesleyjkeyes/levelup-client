import { clientCredentials } from '../client';

const getEvents = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createEvent = (event) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'content-type': 'application/json',
    },
  });
};

const updateEvent = (event) => {
  fetch(`${clientCredentials.databaseURL}events/${event.id}`, {
    method: 'PUT',
    body: JSON.stringify(event),
    headers: {
      'content-type': 'application/json',
    },
  });
};

const deleteEvent = (eventId) => {
  fetch(`${clientCredentials.databaseURL}events/${eventId}`, {
    method: 'DELETE',
  });
};

const getSingleEvent = (eventId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}events/${eventId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export {
  getEvents, createEvent, updateEvent, getSingleEvent, deleteEvent,
};
