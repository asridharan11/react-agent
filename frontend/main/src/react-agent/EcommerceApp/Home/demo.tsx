
import React from 'react';
import HomePage from './index';

const HomePageDemo: React.FC = () => {
 //Dummy data
 const navigationToolbarProps = {
  menuItems: [
   { name: "Home", link: "/home", active: true },
   { name: "Shop", link: "/shop", active: false },
   { name: "About", link: "/about", active: false }],
  companyLogo: "https://dummyimage.com/50x50",
  companyName: "Dummy Company",
  cartItemCount: 3
 };

 const announcementBannerProps = {
  announcements: ["Free shipping on orders over $50!", "New Spring Collection is here!"]
 };

 const scrollableImageBannerProps = {
  data: [
   { image: "https://dummyimage.com/600x400", caption: "Image 1" },
   { image: "https://dummyimage.com/600x400", caption: "Image 2" },
   { image: "https://dummyimage.com/600x400", caption: "Image 3" }
  ]
 };

 const productsCollectionOneProps = {
  title: "Featured Products",
  products: [
   { id: "1", name: "Product 1", price: "$50", image: "https://dummyimage.com/200x200" },
   { id: "2", name: "Product 2", price: "$100", image: "https://dummyimage.com/200x200" },
   { id: "3", name: "Product 3", price: "$75", image: "https://dummyimage.com/200x200" }]
 };

 const productCollectionTwoProps = {
  products: [
   { id: "4", name: "Product 4", price: "$25", image: "https://dummyimage.com/200x200" },
   { id: "5", name: "Product 5", price: "$50", image: "https://dummyimage.com/200x200" },
   { id: "6", name: "Product 6", price: "$125", image: "https://dummyimage.com/200x200" }]
 };

 return (
  <HomePage
   navigationToolbarProps={navigationToolbarProps}
   announcementBannerProps={announcementBannerProps}
   scrollableImageBannerProps={scrollableImageBannerProps}
   productsCollectionOneProps={productsCollectionOneProps}
   productCollectionTwoProps={productCollectionTwoProps}
  />
 );
};

export default HomePageDemo;
