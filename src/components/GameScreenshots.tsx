import useScreenshots from '@/hooks/useScreenshots';
import { Image, SimpleGrid, Skeleton } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (error) throw error;
  if (isLoading)
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} paddingTop={2}>
        <Skeleton height="150px" />
        <Skeleton height="150px" />
        <Skeleton height="150px" />
        <Skeleton height="150px" />
        <Skeleton height="150px" />
        <Skeleton height="150px" />
      </SimpleGrid>
    );
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
