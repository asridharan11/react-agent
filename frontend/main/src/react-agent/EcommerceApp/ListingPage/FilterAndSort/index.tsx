
import React from 'react';
import { Button, Typography, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@react-agent/shadcn-ui';
import Filter from './Filter';
import Sort from './Sort';

export interface FilterAndSortProps {
  categories: string[];
  brands: string[];
  onSortChange: (value: string) => void;
  setCategory: (category: string) => void;
  setBrand: (brand: string) => void;
};

const FilterAndSort: React.FC<FilterAndSortProps> = ({ categories, brands, onSortChange, setCategory, setBrand }) => {
 return (
 <div className = "flex flex-col p-5">
 <Typography variant="h1" className="mb-4">Search Options</Typography>
 <Filter categories = {categories} brands = {brands} setCategory = {setCategory} setBrand = {setBrand} />
 <Sort onSortChange = {onSortChange} />
 </div>
 );
};

export default FilterAndSort;
