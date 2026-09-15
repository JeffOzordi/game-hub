import type { GameQuery } from '@/App';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const isPlatform = gameQuery.platform?.name || '';
  const isGenre = gameQuery.genre?.name || '';
  const heading = `${isPlatform} ${isGenre} Games`;

  return (
    <Heading as="h1" fontSize='5xl' marginY={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
