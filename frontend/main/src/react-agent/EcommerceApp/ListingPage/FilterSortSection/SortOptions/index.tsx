
import React from 'react';
import { Typography, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenu } from '@react-agent/shadcn-ui';

export interface SortOptionsProps {
  onSortChange?: (sortOption: string) => void,
};

const SortOptions: React.FC<SortOptionsProps> = ({ onSortChange }) => {
  const sortList = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Customer Ratings'];
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-blue-500 border-b-2 border-blue-500">Sort By</button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {sortList.map((option, index) => {
          return (
            <DropdownMenuItem key={index} onSelect={() => onSortChange?.(option)}>
              <Typography variant="body" >{option}</Typography>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptions;
