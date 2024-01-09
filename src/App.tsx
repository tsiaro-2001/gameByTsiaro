import { useState } from 'react'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenreList'

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null >(null)
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
        <GameGrid selectGenre={selectGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
