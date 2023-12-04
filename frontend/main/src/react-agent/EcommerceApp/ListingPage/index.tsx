
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, Button, Typography } from '@react-agent/shadcn-ui';
import Header from './Header';
import FilterAndSort from './FilterAndSort';
import ProductListingDisplay from './ProductListingDisplay';
import Footer from './Footer';

export interface ProductListingPageProps {};

const ProductListingPage: React.FC<ProductListingPageProps> = (props: ProductListingPageProps) => {
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
