import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface Genre {
    id: number;
    name: string
}

interface FetchGenreResponse {
    results: Genre[]
    count: number
}
const useGenreList = () => {
    const [genres, setGenre] = useState<Genre[]>([])
    const [error, setError] = useState('')
    useEffect(() => {
        apiClient.get<FetchGenreResponse>('/genres').then(res => setGenre(res.data.results)).catch(err => setError(err) )
    }, [])
    return {genres, error}
}
export default useGenreList