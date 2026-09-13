import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
//   background_image: string;
//   parent_platforms: {platform : Platform}[];
//   metacritic: number;
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres;