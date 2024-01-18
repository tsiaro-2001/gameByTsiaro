import { Text } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}
const GameHeading = ({gameQuery}: Props) => {
 const heading = ` ${gameQuery.platform?.name || '' } ${gameQuery.genre?.name || ''} Games `
  return (
    <Text as={'h1'} marginY={3} fontSize='5xl'>{heading}</Text>
  )
}

export default GameHeading