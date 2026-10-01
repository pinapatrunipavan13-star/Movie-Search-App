import { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { MovieList } from './components/MovieList';
import { Pagination } from './components/Pagination';
import { Controls, type SortOption } from './components/Controls';
import { searchMovies } from './services/api';
import type { Movie } from './types';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Sorting and Filtering states
  const [sortOption, setSortOption] = useState<SortOption>('relevance');
  const [minRating, setMinRating] = useState<number>(0);

  const fetchMovieData = async (searchQuery: string, page: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await searchMovies(searchQuery, page);
      setMovies(data.results);
      setTotalPages(Math.min(data.total_pages, 500)); // TMDB limits to 500 pages max
      setHasSearched(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong while fetching movies.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setCurrentPage(1);
    fetchMovieData(newQuery, 1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    fetchMovieData(query, newPage);
  };

  // Process movies for the current page (filtering & sorting)
  const processedMovies = useMemo(() => {
    let result = [...movies];

    // Filter by min rating
    if (minRating > 0) {
      result = result.filter(movie => movie.vote_average >= minRating);
    }

    // Sort
    if (sortOption !== 'relevance') {
      result.sort((a, b) => {
        if (sortOption === 'rating_desc') {
          return b.vote_average - a.vote_average;
        }
        
        const dateA = a.release_date ? new Date(a.release_date).getTime() : 0;
        const dateB = b.release_date ? new Date(b.release_date).getTime() : 0;
        
        if (sortOption === 'date_desc') {
          return dateB - dateA; // Newest first
        } else if (sortOption === 'date_asc') {
          return dateA - dateB; // Oldest first
        }
        
        return 0;
      });
    }

    return result;
  }, [movies, sortOption, minRating]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SearchBar onSearch={handleSearch} />
        
        {hasSearched && !isLoading && !error && (
          <Controls 
            sortOption={sortOption}
            onSortChange={setSortOption}
            minRating={minRating}
            onMinRatingChange={setMinRating}
          />
        )}

        <MovieList 
          movies={processedMovies} 
          isLoading={isLoading} 
          error={error} 
          hasSearched={hasSearched}
        />
        
        {hasSearched && !isLoading && !error && movies.length > 0 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default App;
