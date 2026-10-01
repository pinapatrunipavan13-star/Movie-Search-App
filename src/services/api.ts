import type { TMDBResponse } from '../types';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query: string, page: number = 1): Promise<TMDBResponse> => {
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    throw new Error('Please set VITE_TMDB_API_KEY in your .env.local file');
  }

  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  
  return response.json();
};
