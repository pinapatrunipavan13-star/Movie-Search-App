

export type SortOption = 'relevance' | 'date_desc' | 'date_asc' | 'rating_desc';

interface ControlsProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
}

export const Controls: React.FC<ControlsProps> = ({ 
  sortOption, 
  onSortChange, 
  minRating, 
  onMinRatingChange 
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg mb-6 gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-semibold text-gray-700">Sort by:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="bg-white border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-gray-500"
        >
          <option value="relevance">Relevance</option>
          <option value="date_desc">Release Date (Newest)</option>
          <option value="date_asc">Release Date (Oldest)</option>
          <option value="rating_desc">Rating (High to Low)</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="filter" className="text-sm font-semibold text-gray-700">Min Rating ({minRating}):</label>
        <input
          id="filter"
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={minRating}
          onChange={(e) => onMinRatingChange(parseFloat(e.target.value))}
          className="w-32 cursor-pointer"
        />
      </div>
    </div>
  );
};
