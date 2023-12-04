
import React from 'react';
import { Typography } from '@react-agent/shadcn-ui';

export interface CurrentPriceProps {
  price: number;
  discount?: number;
}

const CurrentPrice: React.FC<CurrentPriceProps> = ({ price, discount }) => {
  return (
    <div className="flex items-center">
      <Typography variant="h5" color="primary" className="mr-2">
        ${price.toFixed(2)}
      </Typography>
      {discount && (
        <Typography variant="h6" color="gray" className="line-through">
          ${price.toFixed(2)}
        </Typography>
      )}
    </div>
  );
};

export default CurrentPrice;
