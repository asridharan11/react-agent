
import React, { useState } from 'react';
import { Badge, Button, Card, Checkbox, Input, Typography } from '@react-agent/shadcn-ui';

export interface FilterProps {
  filters: any[];
  onFiltersUpdate: (updatedFilters: { [key: string]: any }) => void;
}

const Filters = ({ filters, onFiltersUpdate }: FilterProps) => {
  const [filtersState, setFiltersState] = useState<{ [key: string]: any }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const updatedFilters = { ...filtersState, [id]: event.target.value };
    setFiltersState(updatedFilters);
    onFiltersUpdate(updatedFilters);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const updatedFilters = { ...filtersState, [id]: event.target.checked };
    setFiltersState(updatedFilters);
    onFiltersUpdate(updatedFilters);
  };

  return (
    <div className="flex flex-col space-y-4">
      {filters.map((filter) => {
        const { id, type, label, values } = filter;

        switch (type) {
          case 'PRICE_RANGE':
            return (
              <Card key={id}>
                <Typography>{label}</Typography>
                <Input 
                  type='range'
                  onChange={(e) => handleInputChange(e, id)}
                  value={filtersState[id] || ''}
                  min={values[0].min}
                  max={values[0].max}
                />
              </Card>
            );
          case 'LIST':
            return (
              <Card key={id}>
                <Typography>{label}</Typography>
                {values.map((value) => 
                  <div key={value.id}>
                    <Checkbox 
                      checked={filtersState[id] || false}
                      onChange={(e) => handleCheckboxChange(e, id)}
                    />
                    <Badge>{value.label}</Badge>
                    <Badge>{value.count}</Badge>
                  </div>
                )}
              </Card>
            );
          default:
            return null;
        }
      })}

      <Button onClick={() => onFiltersUpdate(filtersState)}>Apply Filters</Button>
    </div>
  );
};

export default Filters;
