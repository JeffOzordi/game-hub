import { useQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '@/services/apiClient';
import platforms from '@/data/platforms';

const apiClient = new APIClient<Platform>('/platforms/list/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
