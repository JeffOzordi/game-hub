import { useQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '@/services/apiClient';
import genres from '@/data/genres';
// import genreServices from '@/services/genreServices';

const apiClient = new APIClient<Genre>('/genres');
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
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;
