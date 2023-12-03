import React, { useState } from 'react';
import { Box, Button, Typography, Checkbox, Tabs, TabsList, TabsTrigger } from '@react-agent/shadcn-ui';
import Filters from './Filters';
import SortOptions from './SortOptions';

export interface FilterSortSectionProps {
  filters: string[];
  sortOptions: string[];
  onFiltersChange: (newFilters: string[]) => void;
  onSortChange: (sortOption: string) => void;
}

const FilterSortSection = ({ filters, sortOptions, onFiltersChange, onSortChange }: FilterSortSectionProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('');

  const handleFilterChange = (filter: string) => {
    const newSelectedFilters = [...selectedFilters, filter];
    setSelectedFilters(newSelectedFilters);
    onFiltersChange(newSelectedFilters);
  };

  const handleSortChange = (sortOption: string) => {
    setSelectedSortOption(sortOption);
    onSortChange(sortOption);
  };
  return (
    <div className="flex flex-col w-1/4">
      <div className="mb-4">
        <Typography variant="h2">Filters</Typography>
        <Filters filters={filters} selected={selectedFilters} onFilterChange={handleFilterChange} />
      </div>
      <div>
        <Typography variant="h2">Sorting</Typography>
        <SortOptions options={sortOptions} defaultOption={selectedSortOption} onSort={handleSortChange} />
      </div>
    </div>
  );
};
export default FilterSortSection;
