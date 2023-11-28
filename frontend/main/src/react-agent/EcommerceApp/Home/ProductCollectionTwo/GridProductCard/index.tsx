
import React from 'react';
import { Card, CardContent, CardTitle, Typography } from '@react-agent/shadcn-ui';

interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
}

interface GridProductCardProps {
    product: Product;
}

const GridProductCard: React.FC<GridProductCardProps> = ({ product }) => {
  return (
    <Card className="w-full max-w-xs mx-auto rounded-xl shadow-md overflow-hidden">
      <img
        className="h-48 w-full object-cover"
        src={product.image}
        alt={product.name}
      />
      <CardContent className="h-full p-6 space-y-2">
        <CardTitle className="text-lg font-semibold tracking-tight">
          {product.name}
        </CardTitle>
        <Typography variant="body" className="font-semibold text-gray-700">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GridProductCard;
