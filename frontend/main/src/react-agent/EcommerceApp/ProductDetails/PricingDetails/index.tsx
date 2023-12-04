
import React from 'react';
import { Box, Typography } from '@react-agent/shadcn-ui';
import CurrentPrice from './CurrentPrice';

export interface PricingDetailsProps {
  price: number;
  discount?: number;
}

const PricingDetails: React.FC<PricingDetailsProps> = ({ price, discount }) => {
  return (
    <Box className="flex w-full items-center px-4 py-2">
      <CurrentPrice price={price} discount={discount} />
      {discount && (
        <Typography
          variant="body"
          className="text-sm text-red-500 ml-2"
        >{`Save ${discount}%`}</Typography>
      )}
    </Box>
  );
};

export default PricingDetails;
