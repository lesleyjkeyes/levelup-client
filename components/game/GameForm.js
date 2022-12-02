import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createGame, getGameTypes, updateGame } from '../../utils/data/gameData';

const GameForm = ({ user, gameObj }) => {
  const [gameTypes, setGameTypes] = useState([]);
  /*
  Since the input fields are bound to the values of
  the properties of this state variable, you need to
  provide some default values.
  */
  const [currentGame, setCurrentGame] = useState({
    skill_level: '',
    numberOfPlayers: 0,
    title: '',
    maker: '',
    game_type: 0,
  });
  const router = useRouter();

  useEffect(() => {
    getGameTypes().then(setGameTypes);
  }, []);

  useEffect(() => {
    if (gameObj?.id) {
      setCurrentGame({
        id: gameObj.id,
        skill_level: gameObj.skill_level,
        number_of_players: gameObj.number_of_players,
        title: gameObj.title,
        maker: gameObj.maker,
        game_type: gameObj.game_type.id,
      });
    }
  }, [gameObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'game_type' || name === 'number_of_players') {
      setCurrentGame((prevState) => ({
        ...prevState,
        [name]: Number(value),
      }));
    } else {
      setCurrentGame((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameObj?.id) {
      updateGame(currentGame);
      router.push(`/games/${gameObj.id}`);
    } else {
      const game = {

        maker: currentGame.maker,
        title: currentGame.title,
        number_of_players: Number(currentGame.number_of_players),
        skill_level: currentGame.skill_level,
        game_type: Number(currentGame.game_type),
        uid: user.uid,
      };
      createGame(game);
      router.push('/games');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" required value={currentGame.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Game Type</Form.Label>
          <Form.Select
            name="game_type"
            onChange={handleChange}
            className="mb-3"
            required
          >
            <option value="">Select a Game Type</option>
            {
              gameTypes.map((gameType) => (
                <option
                  key={gameType.id}
                  value={gameType.id}
                  selected={currentGame.game_type === gameType.id}
                >
                  {gameType.id} {gameType.label}
                </option>
              ))
            }
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Maker</Form.Label>
          <Form.Control name="maker" required value={currentGame.maker} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Players</Form.Label>
          <Form.Control name="number_of_players" required value={currentGame.number_of_players} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Skill Level</Form.Label>
          <Form.Control name="skill_level" required value={currentGame.skill_level} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

GameForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  gameObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    skill_level: PropTypes.string.isRequired,
    number_of_players: PropTypes.number.isRequired,
    maker: PropTypes.string.isRequired,
    game_type: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameForm;
