import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import {
  HStack,
  Image,
  ListItem,
  ListRoot,
  Text,
} from '@chakra-ui/react';

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ListRoot>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px' listStyle='none'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};

export default GenreList;
