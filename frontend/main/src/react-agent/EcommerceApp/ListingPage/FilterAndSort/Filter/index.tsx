import React from 'react';
import {
  Box,
  Input,
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  Typography,
  SelectValue,
} from '@react-agent/shadcn-ui';

export interface FilterProps {
  onFilterChange: (filter: any) => void; // callback implementation to lift up the filter state to parent component
}

const Filter = ({ onFilterChange }: FilterProps) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | undefined>('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange({ category: category });
  };

  return (
    <Box className="w-full h-auto p-6 border border-gray-300 rounded-md">
      <Typography variant="h2" className="text-lg font-bold mb-3">
        {' '}
        Filter by:
      </Typography>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Category..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem onSelect={() => handleCategoryChange('Cloth')}>Cloth</SelectItem>
            <SelectItem onSelect={() => handleCategoryChange('Tech')}>Tech</SelectItem>
            <SelectItem onSelect={() => handleCategoryChange('Food')}>Food</SelectItem>
            <SelectItem onSelect={() => handleCategoryChange('Furniture')}>Furniture</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        type="range"
        placeholder="Price range"
        className="w-full mt-4"
        onChange={(e) => {
          onFilterChange({ price: e.target.value });
        }}
      />
      <Button
        className="mt-4"
        onClick={() => {
          onFilterChange({ reset: true });
        }}
      >
        Reset filters
      </Button>
    </Box>
  );
};

export default Filter;
