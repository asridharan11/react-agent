
import React from 'react';
import GridProductCard from './GridProductCard';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface ProductCollectionTwoProps {
  products: Product[];
}

const ProductCollectionTwo: React.FC<ProductCollectionTwoProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-2">
      {products.map((product) => (
        <GridProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCollectionTwo;
