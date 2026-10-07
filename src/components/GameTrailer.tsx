import useTrailers from '@/hooks/useTrailers';
import { Skeleton } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Skeleton height="250px" />;
  if (error) throw error;

  const firstTrailer = data?.results[0];
  return firstTrailer ?  ( <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls 
   />) :  null
};

export default GameTrailer;
