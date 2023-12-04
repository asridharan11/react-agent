
import React from 'react';
import { Box, Select, Typography, Button } from '@react-agent/shadcn-ui';
import FilterSection from './FilterSection';
import SortSection from './SortSection';

export interface FilterAndSortProps {};

const FilterAndSort: React.FC<FilterAndSortProps> = (props: FilterAndSortProps) => {
 return (
 <div className="flex h-full w-72 p-4 border-r overflow-y-auto">
   <FilterSection />
   <SortSection />
 </div>
 );
};

export default FilterAndSort;
