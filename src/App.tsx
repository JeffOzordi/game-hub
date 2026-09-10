import { Grid, GridItem, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

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
        <GridItem area="aside" bg="gold"  display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          <GameGrid/>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
