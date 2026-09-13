import { CardBody, CardRoot, HStack, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreListSkeleton = () => {
  return (
      <HStack>
          <Skeleton boxSize='32px'/>
            <SkeletonText noOfLines={1}/>
      </HStack>
  );
};

export default GenreListSkeleton;

