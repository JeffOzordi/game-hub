import { CardBody, CardRoot, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <CardRoot>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </CardRoot>
  );
};

export default GameCardSkeleton;
