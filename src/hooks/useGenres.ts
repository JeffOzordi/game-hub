import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  //   parent_platforms: {platform : Platform}[];
  //   metacritic: number;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
