import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders correctly', () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByLabelText(/Movie Name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search!/i })).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByLabelText(/Movie Name/i) as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'Jurassic' } });
    expect(input.value).toBe('Jurassic');
  });

  it('calls onSearch with query when form is submitted', () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} />);
    
    const input = screen.getByLabelText(/Movie Name/i);
    const button = screen.getByRole('button', { name: /Search!/i });
    
    fireEvent.change(input, { target: { value: 'Jurassic Park' } });
    fireEvent.click(button);
    
    expect(handleSearch).toHaveBeenCalledWith('Jurassic Park');
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  it('does not call onSearch if query is empty', () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} />);
    
    const button = screen.getByRole('button', { name: /Search!/i });
    fireEvent.click(button);
    
    expect(handleSearch).not.toHaveBeenCalled();
  });
});
