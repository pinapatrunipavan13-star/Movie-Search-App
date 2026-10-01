
import type { Movie } from '../types';
import { MovieCard } from './MovieCard';

interface MovieListProps {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
}

export const MovieList: React.FC<MovieListProps> = ({ movies, isLoading, error, hasSearched }) => {
  if (isLoading) {
    return <div className="text-center py-12 text-gray-500 font-medium">Loading movies...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500 font-medium">{error}</div>;
  }

  if (hasSearched && movies.length === 0) {
    return <div className="text-center py-12 text-gray-500 font-medium">No movies found matching your criteria.</div>;
  }

  if (!hasSearched) {
    return <div className="text-center py-12 text-gray-500 font-medium">Search for a movie to get started.</div>;
  }

  return (
    <div className="flex flex-col w-full">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
