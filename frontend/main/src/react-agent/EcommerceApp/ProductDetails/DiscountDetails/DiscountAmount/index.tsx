
import React from 'react';
import { Typography } from '@react-agent/shadcn-ui';

export interface DiscountAmountProps {
  discount: number;
}

const DiscountAmount: React.FC<DiscountAmountProps> = ({ discount }) => {
  return (
    <Typography
      variant="body"
      className="text-lg text-red-500 ml-2"
    >
      - {discount}%
    </Typography>
  );
};

export default DiscountAmount;
