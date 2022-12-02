import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import GameCard from '../../components/game/GameCard';
import { getSingleGame } from '../../utils/data/gameData';

function SingleGameView() {
  const router = useRouter();
  const { gameId } = router.query;
  const [game, setGame] = useState([]);

  useEffect(() => {
    getSingleGame(gameId).then((data) => setGame(data));
  }, [gameId]);

  return (
    <article className="events">
      <h1>{game.title}</h1>
      <GameCard title={game.title} maker={game.maker} numberOfPlayers={game.number_of_players} skillLevel={game.skill_level} gameId={game.id} />
    </article>
  );
}

export default SingleGameView;
