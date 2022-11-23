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

// eslint-disable-next-line import/prefer-default-export
export { getEvents, createEvent };
