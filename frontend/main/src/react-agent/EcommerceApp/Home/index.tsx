
import React from 'react';
import NavigationToolbar from './NavigationToolbar';
import AnnouncementBanner from './AnnouncementBanner';
import ScrollableImageBanner from './ScrollableImageBanner';
import ProductsCollectionOne from './ProductsCollectionOne';
import ProductCollectionTwo from './ProductCollectionTwo';

export interface HomePageProps {
  navigationToolbarProps: React.ComponentProps<typeof NavigationToolbar>;
  announcementBannerProps: React.ComponentProps<typeof AnnouncementBanner>;
  scrollableImageBannerProps: React.ComponentProps<typeof ScrollableImageBanner>;
  productsCollectionOneProps: React.ComponentProps<typeof ProductsCollectionOne>;
  productCollectionTwoProps: React.ComponentProps<typeof ProductCollectionTwo>;
};

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div className="flex flex-col w-screen">
      <NavigationToolbar {...props.navigationToolbarProps} />
      <AnnouncementBanner {...props.announcementBannerProps} />
      <ScrollableImageBanner {...props.scrollableImageBannerProps} />
      <ProductsCollectionOne {...props.productsCollectionOneProps} />
      <ProductCollectionTwo {...props.productCollectionTwoProps} />
    </div>
  );
};

export default HomePage;
