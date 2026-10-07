import ExpandableText from '@/components/ExpandableText';
import GameAttributes from '@/components/GameAttributes';
import GameDetailSkeleton from '@/components/GameDetailsSkeleton';
import GameScreenshots from '@/components/GameScreenshots';
import GameTrailer from '@/components/GameTrailer';
import useGame from '@/hooks/useGame';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <GameDetailSkeleton/>;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
