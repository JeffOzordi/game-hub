import { useQuery } from '@tanstack/react-query';
import apiClients from '@/services/apiClients';
import type { FetchResponse } from './useData';
import genres from '@/data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  //   parent_platforms: {platform : Platform}[];
  //   metacritic: number;
}

const useGenres = () => 
  useQuery({
    queryKey: ['genres'],
    queryFn: () => 
      apiClients
      .get<FetchResponse<Genre>>('/genres')
      .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,  //24 hours
    initialData: { count: genres.length, results: genres}
})
export default useGenres;
