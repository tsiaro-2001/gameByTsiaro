import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { Genre } from "./useGenreList";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[]
  }
  
interface FetchGameResponse {
count: number;
results: Game[]
}

const useGames = (selectGenre: Genre | null, selectPlatform: Platform  | null, selectOrder: string | null) => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    const deps = [selectGenre?.id, selectPlatform?.id, selectOrder];
    const requestConfig = {
      params: { 
        genres: selectGenre?.id,
        platforms: selectPlatform?.id,
        ordering: selectOrder
      }
    }
    
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient.get<FetchGameResponse>('/games', {signal: controller.signal, ...requestConfig })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false)
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
      } )
      return () => controller.abort();
    }, deps ? [...deps] : [])
    return { games, error, isLoading}
}
export default useGames