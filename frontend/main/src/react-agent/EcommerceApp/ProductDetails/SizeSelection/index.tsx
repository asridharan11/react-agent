
import React from 'react';
import { Button, Typography } from '@react-agent/shadcn-ui'
import SizeOptions from './SizeOptions';
import SizeChartLink from './SizeChartLink';

export interface SizeSelectionProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
  sizeChartUrl: string;
}

const SizeSelection: React.FC<SizeSelectionProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
  sizeChartUrl,
}) => {
  return (
    <div className="flex w-full items-center px-4 py-2">
      <SizeOptions
        sizes={sizes}
        selectedSize={selectedSize}
        onSelectSize={onSelectSize}
      />
      <SizeChartLink sizeChartUrl={sizeChartUrl} />
    </div>
  );
};

export default SizeSelection;
