import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { Genre } from "./useGenreList";
import { CanceledError } from "axios";
import { GameQuery } from "../App";

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

const useGames = (gameQuery: GameQuery) => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    const deps = [gameQuery];
    const requestConfig = {
      params: { 
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        search: gameQuery.search
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