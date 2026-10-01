import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MovieCard } from './MovieCard';

const mockMovie = {
  id: 1,
  title: 'Test Movie',
  overview: 'This is a test overview.',
  release_date: '2023-01-01',
  poster_path: '/test.jpg',
  vote_average: 8.5
};

describe('MovieCard', () => {
  it('renders movie details correctly', () => {
    render(<MovieCard movie={mockMovie} />);
    
    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('This is a test overview.')).toBeInTheDocument();
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
    
    const image = screen.getByAltText('Test Movie poster');
    expect(image).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/test.jpg');
  });

  it('renders placeholder image when poster_path is null', () => {
    const movieWithoutPoster = { ...mockMovie, poster_path: null };
    render(<MovieCard movie={movieWithoutPoster} />);
    
    const image = screen.getByAltText('Test Movie poster');
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/500x750?text=No+Poster');
  });

  it('handles missing overview and release date gracefully', () => {
    const incompleteMovie = { ...mockMovie, overview: '', release_date: '' };
    render(<MovieCard movie={incompleteMovie} />);
    
    expect(screen.getByText('No overview available.')).toBeInTheDocument();
    expect(screen.getByText('Unknown')).toBeInTheDocument();
  });
});
