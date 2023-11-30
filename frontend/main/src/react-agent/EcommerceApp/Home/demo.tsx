import React from 'react';
import EcommerceHomePage from './index';

const EcommerceHomePageDemo: React.FC = () => {
  const demoProducts = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      imageUrl: '/path/to/image1.png',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
      imageUrl: '/path/to/image2.png',
    },
    // More products....
  ];

  const demoDeals = [
    // Your demo deals here
  ];

  const demoCategories = [
    // Your demo categories here
  ];

  const demoNewArrivals = [
    // Your demo new arrivals here
  ];

  const demoReviews = [
    // Your demo reviews here
  ];

  return (
    <EcommerceHomePage
      logo={'/path/to/logo.png'}
      products={demoProducts}
      deals={demoDeals}
      categories={demoCategories}
      newArrivals={demoNewArrivals}
      reviews={demoReviews}
    />
  );
};

export default EcommerceHomePageDemo;
