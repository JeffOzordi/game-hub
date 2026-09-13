import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import {
  HStack,
  Image,
  ListItem,
  ListRoot,
  Spinner,
  Text,
} from '@chakra-ui/react';
import GenreListSkeleton from './GenreListSkeleton';
import GenreListContainer from './GenreListContainer';

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <ListRoot>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListContainer>
            <GenreListSkeleton key={skeleton} />
          </GenreListContainer>
        ))}
      {data.map((genre) => (
        <GenreListContainer>
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        </GenreListContainer>
      ))}
    </ListRoot>
  );
};

export default GenreList;
