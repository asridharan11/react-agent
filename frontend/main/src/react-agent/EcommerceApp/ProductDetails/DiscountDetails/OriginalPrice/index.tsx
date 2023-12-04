
import React from 'react';
import { Typography } from '@react-agent/shadcn-ui';

export interface OriginalPriceProps {
  price: number;
}

const OriginalPrice: React.FC<OriginalPriceProps> = ({ price }) => {
  return (
    <Typography variant="body" className="text-sm text-gray-500 line-through">
      ${price.toFixed(2)}
    </Typography>
  );
};

export default OriginalPrice;
