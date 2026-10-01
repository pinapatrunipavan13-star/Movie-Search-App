
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 mb-6 transition-shadow hover:shadow-md">
      <div className="w-full md:w-48 lg:w-56 shrink-0 bg-gray-100 flex items-center justify-center">
        <img 
          src={posterUrl} 
          alt={`${movie.title} poster`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-start">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{movie.title}</h2>
        
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <p><span className="font-semibold uppercase text-gray-500">Release Date:</span> {movie.release_date || 'Unknown'}</p>
          <p><span className="font-semibold uppercase text-gray-500">Rating:</span> {movie.vote_average}</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {movie.overview || 'No overview available.'}
        </p>
      </div>
    </div>
  );
};
