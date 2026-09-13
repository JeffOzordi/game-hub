import { CardBody, CardRoot, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <CardRoot width='400px'  borderRadius={10} overflow='hidden'>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </CardRoot>
  );
};

export default GameCardSkeleton;
