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

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null >(null)
  const [selectPlatform, setSelectPlatform] = useState<Platform  | null >(null)
  const [selectSortOrder, setSeletSortOrder] = useState('')
  return (
    <Grid templateAreas={{
      base: ` "nav" "main" `,
      lg: ` "nav nav" "aside main" `
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
         <GenreList selectGenre={selectGenre} onSelectGenre={(genre) => setSelectGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack marginBottom={4}> 
          <PlatformSelect selectPlatform={selectPlatform} onSelectPlatform={(platform) => setSelectPlatform(platform)} />
          <SortSelector onSelectSortOrder={(order) => setSeletSortOrder(order)} />
        </HStack>
        <GameGrid selectOrder={selectSortOrder} selectPlatform={selectPlatform} selectGenre={selectGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
