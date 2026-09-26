import type { GameQuery } from '@/App';
import useGenres from '@/hooks/useGenres';
import { Heading } from '@chakra-ui/react';
import usePlatforms from '@/hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres()
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)
  
  const { data: platforms } = usePlatforms()
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId)

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
