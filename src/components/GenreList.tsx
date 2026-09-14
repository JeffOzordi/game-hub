import useGenres, { type Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import {
    Button,
  HStack,
  Image,
  ListItem,
  ListRoot,
  Text,
} from '@chakra-ui/react';
import GenreListSkeleton from './GenreListSkeleton';
import GenreListContainer from './GenreListContainer';

interface Props {
    onSelectGenre: (genre:Genre) => void
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <ListRoot>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListContainer key={skeleton}>
            <GenreListSkeleton  />
          </GenreListContainer>
        ))}
      {data.map((genre) => (
        <GenreListContainer  key={genre.id}>
          <ListItem>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize="lg" variant='plain'>{genre.name}</Button>
            </HStack>
          </ListItem>
        </GenreListContainer>
      ))}
    </ListRoot>
  );
};

export default GenreList;
