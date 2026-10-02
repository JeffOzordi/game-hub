import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import {
  Heading,
  HStack,
  Image,
  ListItem,
  ListRoot,
  Text,
} from '@chakra-ui/react';
// import GenreListSkeleton from './GenreListSkeleton';
import useGameQueryStore from '@/store';
import GenreListContainer from './GenreListContainer';


const GenreList = () => {
  const { data, error} = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)
  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  if (error) return null

  return (
    <>
      <Heading fontSize="3xl">
        Genres
      </Heading>
      <ListRoot>
        {data?.results.map((genre) => (
          <GenreListContainer key={genre.id}>
            <ListItem>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text
                  whiteSpace="wrap"
                  textAlign="left"
                  cursor='pointer'
                  fontWeight={
                    genre.id === selectedGenreId ? 'bold' : 'normal'
                  }
                  onClick={() => setSelectedGenreId(genre.id)}
                  fontSize="lg"
                  // variant="plain"
                >
                  {genre.name}
                </Text>
              </HStack>
            </ListItem>
          </GenreListContainer>
        ))}
      </ListRoot>
    </>
  );
};

export default GenreList;
