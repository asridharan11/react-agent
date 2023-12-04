
import React from 'react';
import { AspectRatio, Typography } from '@react-agent/shadcn-ui';

interface ProductImageProps {
  imageUrl: string;
  productName: string;
  description: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, productName, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <AspectRatio ratio={16 / 9} className="bg-gray-200">
          <img src={imageUrl} alt={productName} className="rounded-md object-cover" />
        </AspectRatio>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <Typography variant="h2" className="text-2xl font-medium mb-4">
          {productName}
        </Typography>
        <Typography variant="body">{description}</Typography>
      </div>
    </div>
  );
};

export default ProductImage;
