import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 py-8">
      <label htmlFor="search" className="font-bold text-gray-700 uppercase tracking-wide whitespace-nowrap">
        Movie Name
      </label>
      <input
        id="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. Jurassic Park"
        className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500 shadow-sm"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors shadow-sm"
      >
        Search!
      </button>
    </form>
  );
};
