
import React from 'react';
import { Card, CardContent, Typography, Button } from '@react-agent/shadcn-ui';
import ProductCard from './ProductCard';

export interface ProductListingProps {
  products: Array<{
    imageUrl: string;
    name: string;
    description: string;
    price: number;
  }>;
  addToCart: (productName: string) => void;
}

const ProductListing = ({ products, addToCart }: ProductListingProps) => {
  return (
    <div className="flex flex-wrap justify-between">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
          onAddToCart={() => addToCart(product.name)}
        />
      ))}
    </div>
  );
};

export default ProductListing;

