
import React from 'react';
import { Card, CardContent, CardDescription, Typography, Button } from '@react-agent/shadcn-ui';

export interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, description, price, onAddToCart }) => {
  return (
    <Card className="flex flex-col p-5 space-y-2">
      <img src={imageUrl} alt={name} className="object-cover w-full h-64 rounded" />
      <CardContent>
        <Typography variant="h2" className="mb-2 font-bold text-primary">{name}</Typography>
        <CardDescription>
          <Typography variant="body" className="mb-4 text-gray-700">{description}</Typography>
        </CardDescription>
        <Typography variant="h4" className="mb-4 font-semibold text-secondary">${price}</Typography>
        <Button onClick={onAddToCart} className="self-start bg-primary text-white">Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
