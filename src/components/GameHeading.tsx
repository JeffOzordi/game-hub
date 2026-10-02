import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import useGameQueryStore from '@/store';
import { Heading } from '@chakra-ui/react';


const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = useGenre(genreId)
  
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(platformId)

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
