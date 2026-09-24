import { useQuery } from "@tanstack/react-query";
import type { Platform } from "./useGames";
import apiClients, { type FetchResponse } from "@/services/apiClients";
import platforms from "@/data/platforms";

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => 
        apiClients
            .get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: platforms.length, results: platforms} 
})

export default usePlatforms;