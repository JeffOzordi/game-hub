import type { GameQuery } from '@/App';
import { useQuery } from '@tanstack/react-query';
import apiClients, { type FetchResponse } from "@/services/apiClients";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//! REFACTOR: duplicate defintion for interface platform
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClients
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;