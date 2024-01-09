import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenreList, { Genre } from "../hooks/useGenreList"
import getUrlImage from "../services/getUrlImage"

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null 
}
const GenreList = ({onSelectGenre, selectGenre}: Props) => {
  const {genres, error} =  useGenreList()
  if (error) return null;
  return (
    <List>
        {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image marginY={1} borderRadius={4} boxSize='35px' src={getUrlImage(genre.image_background) } />
               <Button fontWeight={genre.id === selectGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)
               }>{genre.name}</Button> 
            </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList