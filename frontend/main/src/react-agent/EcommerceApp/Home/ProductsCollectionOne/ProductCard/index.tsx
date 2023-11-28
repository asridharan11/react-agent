

import React, { FC } from 'react';
import { Card, CardContent, CardDescription, Typography } from '@react-agent/shadcn-ui';

interface Product {
  image: string; // URL for the image
  title: string; // Product name/title
  price: string | number; // Product price
}

interface ProductCardProps {
  product: Product; // Product data
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="flex flex-col items-center m-2 shadow-lg">
      <img className="w-full h-64 flex-none" src={product.image} alt={product.title} />
      <CardContent className="flex flex-col items-center w-full">
        <Typography variant="h6" className="text-gray-900" >{product.title}</Typography>
        <CardDescription className="mt-2 text-gray-700">
          <Typography variant="body">{product.price}</Typography>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

