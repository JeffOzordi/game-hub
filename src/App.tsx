import { Grid, GridItem, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
  return (
    <Box minH="100vh"  color="fg">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <GridItem area="aside"  display={{ base: "none", lg: "block" }}>
          <GenreList/>
        </GridItem>
        <GridItem area="main">
          <GameGrid/>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
