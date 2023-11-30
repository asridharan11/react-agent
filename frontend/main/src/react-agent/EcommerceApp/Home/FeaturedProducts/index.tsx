
import React from 'react';
import { Typography, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button } from '@react-agent/shadcn-ui'

export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    oldPrice?: number;
}

export interface FeaturedProductsProps {
    products: Product[];
};

const FeaturedProducts = ({products}: FeaturedProductsProps) => {
 return (
    <div className="grid grid-cols-3 gap-4 p-4">
        <Typography variant="h2">Featured Products</Typography>
        {products.map((product)=> (
            <Card key={product.id}>
                <CardHeader>
                    <CardTitle>
                        <img src={product.image} alt={product.name} className="w-full object-cover h-48"/>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Typography variant="h3">{product.name}</Typography>
                    <CardDescription>
                        <Typography variant="body">{product.description}</Typography>
                    </CardDescription>
                    {product.oldPrice && 
                        <Typography variant="body" className="line-through text-red-600">${product.oldPrice}</Typography>
                    }
                    <Typography variant="h4">${product.price}</Typography>
                </CardContent>
                <CardFooter>
                    <Button>Add to Cart</Button>
                </CardFooter>
            </Card>
        ))}
    </div>
 );
};

export default FeaturedProducts;
