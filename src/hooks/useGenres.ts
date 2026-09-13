import apiClients from "@/services/apiClients";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Genre {
  id: number;
  name: string;
//   background_image: string;
//   parent_platforms: {platform : Platform}[];
//   metacritic: number;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
      const [error, setError] = useState('');
      const [isLoading, setLoading] = useState(false)
    
      useEffect(() => {
        const controller = new AbortController();
    
        setLoading(true)
        apiClients
          .get<FetchGenresResponse>('/genres', { signal: controller.signal })
          .then((res) => {
            setGenres(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
          });
    
        return() => controller.abort();
      }, []);
    
      return { genres, error, isLoading };
}

export default useGenres;