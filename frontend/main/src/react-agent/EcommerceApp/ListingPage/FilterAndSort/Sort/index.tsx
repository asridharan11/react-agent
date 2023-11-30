import React, { useState } from 'react';
import { Button, SelectTrigger, SelectContent, SelectValue, SelectItem, Select } from '@react-agent/shadcn-ui';

interface SortProps {
  onSortChange: (value: string) => void;
}

const Sort: React.FC<SortProps> = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSortChange = (value) => {
    setSelectedOption(value);
    onSortChange(value);
  };

  return (
    <div className="flex items-center space-x-4">
      <Button variant="secondary">Filter</Button>

      <Select>
        <SelectTrigger className="w-48">
          <SelectValue placeholder={selectedOption || 'Sort by'} />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="priceLowHigh" onClick={() => handleSortChange('priceLowHigh')}>
            Price: Low to High
          </SelectItem>
          <SelectItem value="priceHighLow" onClick={() => handleSortChange('priceHighLow')}>
            Price: High to Low
          </SelectItem>
          <SelectItem value="rating" onClick={() => handleSortChange('rating')}>
            Rating
          </SelectItem>
          <SelectItem value="relevance" onClick={() => handleSortChange('relevance')}>
            Relevance
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sort;
