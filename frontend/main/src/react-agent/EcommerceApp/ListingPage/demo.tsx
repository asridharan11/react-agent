
import React from 'react';
import Header from './Header';
import FilterAndSort from './FilterAndSort';
import ProductListingDisplay from './ProductListingDisplay';
import Footer from './Footer';

const ProductListingPage: React.FC = () => {
  return (
    <div className="flex">
      <Header />
      <FilterAndSort />
      <ProductListingDisplay />
      <Footer />
    </div>
  );
};

export default ProductListingPage;
