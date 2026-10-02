import { Box, Grid, GridItem, HStack } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

function App() {
  return (
    <Box minH="100vh" color="fg" >
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <GridItem
          area="aside"
          paddingX={5}
          display={{ base: 'none', lg: 'block' }}
        >
          <GenreList/>
        </GridItem>
        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading/>
            <HStack  marginBottom={0}>
              <PlatformSelector/>
              <SortSelector/>
            </HStack>
          </Box>
          <GameGrid/>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
