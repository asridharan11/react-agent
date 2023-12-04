
import React from 'react';
import { Button } from '@react-agent/shadcn-ui';

interface AddToCartAndBuyNowButtonsProps {
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const AddToCartAndBuyNowButtons: React.FC<AddToCartAndBuyNowButtonsProps> = ({
  onAddToCart,
  onBuyNow,
}) => {
  return (
    <div className="flex w-full items-center justify-center py-4">
      <Button
        className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
      <Button
        className="px-4 py-2 ml-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
        onClick={onBuyNow}
      >
        Buy Now
      </Button>
    </div>
  );
};

export default AddToCartAndBuyNowButtons;
