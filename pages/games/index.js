import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Router from 'next/router';
import GameCard from '../../components/game/GameCard';
import { getGames } from '../../utils/data/gameData';

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);

  return (
    <article className="games">
      <h1>Games</h1>

      <Button onClick={() => {
        Router.push('/games/new');
      }}
      >
        Register New Game
      </Button>
      {games.map((game) => (
        <section key={`game--${game.id}`} className="game">
          <GameCard title={game.title} maker={game.maker} numberOfPlayers={game.number_of_players} skillLevel={game.skill_level} gameId={game.id} />
        </section>
      ))}
    </article>
  );
}

export default Home;
