import { useState } from 'react'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenreList'
import PlatformSelect from './components/PlatformSelect'
import { Platform } from './hooks/useGames'

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null >(null)
  const [selectPlatform, setSelectPlatform] = useState<Platform  | null >(null)
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
        <PlatformSelect selectPlatform={selectPlatform} onSelectPlatform={(platform) => setSelectPlatform(platform)} />
        <GameGrid selectPlatform={selectPlatform} selectGenre={selectGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
