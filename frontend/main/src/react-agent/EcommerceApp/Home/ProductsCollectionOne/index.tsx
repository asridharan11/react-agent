
import React, { FC } from 'react';
import { Typography } from '@react-agent/shadcn-ui';
import ProductCard from './ProductCard';

export interface Product {
    image: string;
    title: string;
    price: string | number;
};

export interface ProductsCollectionOneProps {
    title: string;
    products: Product[];
};

const ProductsCollectionOne: FC<ProductsCollectionOneProps> = ({ title, products }) => {
    return (
        <div className="flex flex-col w-full space-y-4">
            <Typography variant="h2" className="text-2xl">
                {title}
            </Typography>
            <div className="flex flex-row space-x-2 overflow-auto">
                {products.map((product, index) => 
                    <ProductCard 
                        key={index}
                        product={product}
                    />
				)}
            </div>
        </div>
    );
};

export default ProductsCollectionOne;
