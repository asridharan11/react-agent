
import React from 'react';
import { ComponentNameOne, ComponentNameTwo } from '@react-agent/shadcn-ui';

export interface SizeOptionsProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const SizeOptions: React.FC<SizeOptionsProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span>Select Size:</span>
      {sizes.map((size) => (
        <button
          key={size}
          className={`${
            size === selectedSize
              ? 'bg-gray-500 text-white'
              : 'bg-gray-200 text-gray-700'
          } py-2 px-4 rounded focus:outline-none`}
          onClick={() => onSelectSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeOptions;
