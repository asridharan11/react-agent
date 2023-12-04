
import React from 'react';
import { Typography, Box } from '@react-agent/shadcn-ui'
import OriginalPrice from './OriginalPrice';
import DiscountAmount from './DiscountAmount';

export interface DiscountDetailsProps {
  originalPrice: number;
  discountedPrice?: number;
  discountPercentage?: number;
}

const DiscountDetails: React.FC<DiscountDetailsProps> = ({
  originalPrice,
  discountedPrice,
  discountPercentage,
}) => {

  return (
    <Box className="flex w-full items-center px-4 py-2">
      <OriginalPrice price={originalPrice} />
      {discountedPrice && discountPercentage && (
        <>
          <DiscountAmount discount={discountPercentage} />
          <Typography variant="body" className="text-lg text-gray-700 ml-2">
            ${discountedPrice.toFixed(2)}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default DiscountDetails;
