import React, { useEffect, useState } from 'react';
import apiClients from '@/services/apiClients';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  // next?: string;
  // previous?: string
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClients
      .get<FetchGamesResponse>('/games')
      .then((res) => {
        console.log('RESPONSE DATA:', res.data);
        setGames(res.data.results);
      })
      .catch((err) => {
        console.log('ERROR:', err);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
