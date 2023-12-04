import React from 'react';
import {
  Box,
  Select,
  Typography,
  Button,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@react-agent/shadcn-ui';

export interface FilterSectionProps {}

const FilterSection: React.FC<FilterSectionProps> = (props: FilterSectionProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <Box className="w-full p-2">
        {/* Filter products by price range */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select price range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Price</SelectLabel>
              <SelectItem value="0-100">$0 - $100</SelectItem>
              <SelectItem value="101-200">$101 - $200</SelectItem>
              {/* Add more price range options */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Box>
      <Box className="w-full p-2">
        {/* Filter products by size */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Size</SelectLabel>
              <SelectItem value="xs">XS</SelectItem>
              <SelectItem value="s">S</SelectItem>
              {/* Add more size options */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Box>
    </div>
  );
};

export default FilterSection;
