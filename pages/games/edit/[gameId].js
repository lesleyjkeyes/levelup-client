import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GameForm from '../../../components/game/GameForm';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleGame } from '../../../utils/data/gameData';

const UpdateGame = () => {
  const router = useRouter();
  const { gameId } = router.query;
  const { user } = useAuth();
  const [game, setGame] = useState();
  useEffect(() => {
    getSingleGame(gameId).then(setGame);
  }, [gameId]);

  return (
    <div>
      <h2>Update Game</h2>
      <GameForm user={user} gameObj={game} />
    </div>
  );
};

export default UpdateGame;
