import { Grid, GridItem, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import type { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import type { Platform } from './hooks/useGames';

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Box minH="100vh"  color="fg">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <GridItem area="aside" paddingX={5}  display={{ base: "none", lg: "block" }}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre})}/>
        </GridItem>
        <GridItem area="main">
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}/>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
