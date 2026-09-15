import { Grid, GridItem, Box, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import type { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import type { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Box minH="100vh" color="fg">
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
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery,searchText})}/>
        </GridItem>
        <GridItem
          area="aside"
          paddingX={5}
          display={{ base: 'none', lg: 'block' }}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading  gameQuery={gameQuery}/>
            <HStack  marginBottom={0}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
