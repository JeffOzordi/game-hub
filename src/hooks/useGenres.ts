import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '@/services/apiClient';
import genres from '@/data/genres';
import type { Genre } from '../entities/Genre';
// import genreServices from '@/services/genreServices';

const apiClient = new APIClient<Genre>('/genres');
const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });
export default useGenres;
