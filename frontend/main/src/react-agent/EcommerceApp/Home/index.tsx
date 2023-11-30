import React from 'react';
import Header from './Header';
import FeaturedProducts, { Product } from './FeaturedProducts';
import PromotionAndDeals from './PromotionAndDeals';
import ProductCategories from './ProductCategories';
import NewArrivals from './NewArrivals';
import UserReviews from './UserReviews';
import Footer from './Footer';

export interface EcommerceHomePageProps {
  logo: string;
  products: Product[];
  deals: Deal[];
  categories: Category[];
  newArrivals: Product[];
  reviews: Review[];
}

const EcommerceHomePage: React.FC<EcommerceHomePageProps> = (props: EcommerceHomePageProps) => {
  return (
    <div className="flex flex-col">
      <Header logo={props.logo} />
      <FeaturedProducts products={props.products} />
      <PromotionAndDeals deals={props.deals} />
      <ProductCategories categories={props.categories} />
      <NewArrivals products={props.newArrivals} />
      <UserReviews reviews={props.reviews} />
      <Footer />
    </div>
  );
};

export default EcommerceHomePage;
