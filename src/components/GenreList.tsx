import useGenreList from "../hooks/useGenreList"

const GenreList = () => {
  const {genres} =  useGenreList()
  return (
    <ul>
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList