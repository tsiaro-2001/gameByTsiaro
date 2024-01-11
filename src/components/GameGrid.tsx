import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenreList';

interface Props {
  selectGenre: Genre | null;
  selectPlatform: Platform | null;
}
const GameGrid = ({selectGenre, selectPlatform}: Props) => {
  const {games, error, isLoading} = useGames(selectGenre, selectPlatform)
  const skeletons = [1,2,3,4,5,6]
  if(error) return null;
  return (
    <>
      {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:4 }} padding='10px' spacing={10}>
      {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton } />) }
      {games.map(game => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
    </>
    
    
  )
}

export default GameGrid