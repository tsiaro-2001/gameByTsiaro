import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { Platform } from "./useGames"

interface FetchPlatformRespone {
    results: Platform[]
}
const usePlatform = () => {
    const [platforms, setPlatform] = useState<Platform[]>()
    useEffect(() => {
        apiClient.get<FetchPlatformRespone>('/platforms/lists/parents').
        then(res => setPlatform(res.data.results)).
        catch(err => console.log(err)
        )
    }, [])
    return {platforms}
}

export default usePlatform