import { clientCredentials } from '../client';

const getEvents = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    headers: {
      Authorization: uid,
    },
  })
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

const leaveEvent = (eventId) => {
  fetch(`${clientCredentials.databaseURL}events/${eventId}/leave`, {
    method: 'DELETE',
  });
};

const joinEvent = (eventId, userId) => {
  console.warn(eventId, userId);
  fetch(`${clientCredentials.databaseURL}/events/${eventId}/signup`, {
    method: 'POST',
    body: JSON.stringify(userId),
    headers: {
      'content-type': 'application/json',
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export {
  getEvents, createEvent, updateEvent, getSingleEvent, deleteEvent, leaveEvent, joinEvent,
};
