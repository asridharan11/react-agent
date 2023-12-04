
import React from 'react';
import { Typography, Button, Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@react-agent/shadcn-ui'
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';

export interface ProductImageAndDetailsProps {};

const ProductImageAndDetails: React.FC<ProductImageAndDetailsProps> = (props) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2">
        <ProductImage />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductImageAndDetails;
