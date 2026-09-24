import type { GameQuery } from '@/App';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '@/services/apiClient';
import type { Platform } from './usePlatforms';

const apiClient = new APIClient<Game>('/games')

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),

    getNextPageParam: (lastPage, allPages) => {
      // We'll determine this from the API response
      return lastPage.next ? allPages.length + 1 : undefined
    },
  });

  export default useGames