import React from 'react';
import ProductListingPage from './index';

interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  description: string;
}

interface Filter {
  id: string;
  label: string;
  type: 'PRICE_RANGE' | 'LIST';
  values: Array<{ count: number; id: string; input: string; label: string; typename: string }>;
  typename: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    image: 'https://example.com/image1.png',
    name: 'Product 1',
    price: '100$',
    description: 'Product 1 description',
  },
  {
    id: '2',
    image: 'https://example.com/image2.png',
    name: 'Product 2',
    price: '200$',
    description: 'Product 2 description',
  },
];

const mockFilters: Filter[] = [
  {
    id: '1',
    label: 'Price',
    type: 'PRICE_RANGE',
    values: [],
    typename: 'Number',
  },
  {
    id: '2',
    label: 'Brand',
    type: 'LIST',
    values: [],
    typename: 'String',
  },
];

const ProductListingPageDemo: React.FC = () => {
  const handleAddProductToCart = (productId: string) => {
    console.log(`Product with id ${productId} added to cart`);
  };

  return (
    <ProductListingPage
      logo="https://example.com/logo.png"
      menuItems={['Home', 'Products', 'About']}
      filters={mockFilters}
      products={mockProducts}
      onAddProductToCart={handleAddProductToCart}
    />
  );
};

export default ProductListingPageDemo;
