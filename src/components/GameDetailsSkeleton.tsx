import {
    Box,
    Heading,
    SimpleGrid,
    SkeletonText
} from '@chakra-ui/react';

const GameDetailSkeleton = () => {

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <Box gap={5}>
        <Heading>
          <SkeletonText height={6}/>
        </Heading>
        <SkeletonText noOfLines={4} />
        <SimpleGrid columns={2} gap={5} paddingY={8}>
          <Box>
            <SkeletonText  noOfLines={1} width='50px'/>
            <SkeletonText noOfLines={2} />
          </Box>
          <Box>
            <SkeletonText  noOfLines={1} width='50px'/>
            <SkeletonText noOfLines={2} />
          </Box>
          <Box>
            <SkeletonText  noOfLines={1} width='50px'/>
            <SkeletonText noOfLines={2} />
          </Box>
          <Box>
            <SkeletonText noOfLines={1} width='50px'/>
            <SkeletonText noOfLines={2} />
          </Box>
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailSkeleton;
