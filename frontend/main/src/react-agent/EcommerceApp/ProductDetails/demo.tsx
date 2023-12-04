
import React from 'react';
import {
  Button,
  NavigationMenu,
  Footer,
} from '@react-agent/shadcn-ui';
import Header from './Header';
import ProductImageAndDetails from './ProductImageAndDetails';
import SizeSelection from './SizeSelection';
import PricingDetails from './PricingDetails';
import DiscountDetails from './DiscountDetails';
import AddToCartAndBuyNowButtons from './AddToCartAndBuyNowButtons';
import FitAndFinishDetails from './FitAndFinishDetails';
import SimilarProductsAndRecommendations from './SimilarProductsAndRecommendations';

const ProductDetailsPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <NavigationMenu />
      <Header />
      <ProductImageAndDetails />
      <SizeSelection />
      <PricingDetails />
      <DiscountDetails />
      <AddToCartAndBuyNowButtons />
      <FitAndFinishDetails />
      <SimilarProductsAndRecommendations />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
