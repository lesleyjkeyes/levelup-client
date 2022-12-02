import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Router from 'next/router';
import { deleteGame } from '../../utils/data/gameData';

const GameCard = ({
  title, //
  maker,
  numberOfPlayers,
  skillLevel,
  gameId,
  // eslint-disable-next-line react/prop-types
  refresh,
}) => (
  <Card className="text-center">
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <Card.Title>By: {maker}</Card.Title>
      <Card.Text>{numberOfPlayers} players needed</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Skill Level: {skillLevel}</Card.Footer>
    <Button
      onClick={() => {
        Router.push(`/games/edit/${gameId}`);
      }}
    >
      Update Game
    </Button>
    <Button
      onClick={() => {
        deleteGame(gameId);
        refresh();
      }}
    >
      Delete Game
    </Button>
  </Card>
);

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
  gameId: PropTypes.number.isRequired,
};

export default GameCard;
