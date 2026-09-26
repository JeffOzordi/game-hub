import { useQuery } from '@tanstack/react-query';
import ms from 'ms'
import APIClient from '@/services/apiClient';
import genres from '@/data/genres';
// import genreServices from '@/services/genreServices';

const apiClient = new APIClient<Genre>('/genres')
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
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
})
export default useGenres;
