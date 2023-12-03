
import React, { useState } from 'react';
import Header from './Header';
import FilterSortSection from './FilterSortSection';
import ProductListingSection from './ProductListingSection';
import Footer from './Footer';

export interface Filter {
  id: string;
  label: string;
  type: 'PRICE_RANGE' | 'LIST';
  values: Array<{ count: number, id: string, input: string, label: string, typename: string }>;
  typename: string;
}

export interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  description: string;
}

export interface ProductListingPageProps {
  logo: string;
  menuItems: string[];
  filters: Filter[];
  products: Product[];
  onAddProductToCart: (productId: string) => void;
};

const ProductListingPage: React.FC<ProductListingPageProps> = ({
  logo,
  menuItems,
  filters,
  products,
  onAddProductToCart
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('');

  const handleFiltersChange = (newFilters: string[]) => {
    setSelectedFilters(newFilters); 
  };

  const handleSortChange = (sortOption: string) => {
    setSelectedSortOption(sortOption); 
  };

  return (
    <div className="flex flex-col">
      <Header
        logo={logo}
        menuItems={menuItems}
      />

      <div className="flex flex-row">
        <FilterSortSection 
          filters={filters.map(filter => filter.label)}
          sortOptions={['Relevance', 'Price Low to High', 'Price High to Low', 'Customer Ratings']}
          onFiltersChange={handleFiltersChange}
          onSortChange={handleSortChange}
         />

        <ProductListingSection 
          products={products}
          onAddProductToCart={onAddProductToCart}
        />
      </div>    

      <Footer />
    </div>
  );
};

export default ProductListingPage;
