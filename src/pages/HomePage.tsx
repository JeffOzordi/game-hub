import GameGrid from '@/components/GameGrid'
import GameHeading from '@/components/GameHeading'
import GenreList from '@/components/GenreList'
import PlatformSelector from '@/components/PlatformSelector'
import SortSelector from '@/components/SortSelector'
import { Box, Grid, GridItem, HStack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Box minH="100vh" color="fg">
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem
          area="aside"
          paddingX={5}
          display={{ base: 'none', lg: 'block' }}
        >
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading />
            <HStack marginBottom={0}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default HomePage