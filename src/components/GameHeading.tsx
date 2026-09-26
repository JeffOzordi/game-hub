import type { GameQuery } from '@/App';
import { Heading } from '@chakra-ui/react';
import usePlatform from '@/hooks/usePlatform';
import useGenre from '@/hooks/useGenre';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId)
  const platform = usePlatform(gameQuery.platformId)

  const isPlatform = platform?.name || '';
  const isGenre = genre?.name || '';
  const heading = `${isPlatform} ${isGenre} Games`;

  return (
    <Heading as="h1" fontSize='5xl' marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
