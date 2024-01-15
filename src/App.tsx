import { useState } from 'react'
import './App.css'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenreList'
import PlatformSelect from './components/PlatformSelect'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genre: Genre | null ;
  platform: Platform | null ;
  sortOrder: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  

  return (
    <Grid templateAreas={{
      base: ` "nav" "main" `,
      lg: ` "nav nav" "aside main" `
    }}>
      <GridItem area='nav'>
        <NavBar onSearch={(val) => setGameQuery({...gameQuery, search: val})} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
         <GenreList selectGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre: genre})}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack marginBottom={4}> 
          <PlatformSelect selectPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform: platform})} />
          <SortSelector onSelectSortOrder={(order) => setGameQuery({ ...gameQuery, sortOrder: order })} />
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
