import React from 'react';
import ProductListingPage from './index';

const ProductListingPageDemo = () => {
  const products = [
    {
      id: '1',
      name: 'Product 1',
      description: 'This is product 1',
      price: 100,
      imageUrl: 'http://via.placeholder.com/200',
      category: 'Category 1',
      brand: 'Brand 1',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'This is product 2',
      price: 200,
      imageUrl: 'http://via.placeholder.com/200',
      category: 'Category 2',
      brand: 'Brand 2',
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'This is product 3',
      price: 300,
      imageUrl: 'http://via.placeholder.com/200',
      category: 'Category 1',
      brand: 'Brand 2',
    },
  ];

  return <ProductListingPage products={products} />;
};

export default ProductListingPageDemo;
