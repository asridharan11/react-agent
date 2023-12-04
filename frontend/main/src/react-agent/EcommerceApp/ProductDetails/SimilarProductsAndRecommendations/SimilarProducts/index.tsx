
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button } from '@react-agent/shadcn-ui';

export interface SimilarProductsProps { };

const SimilarProducts: React.FC<SimilarProductsProps> = () => {
  const products = [
    {
      title: 'Product 1',
      description: 'This is the description for Product 1',
    },
    {
      title: 'Product 2',
      description: 'This is the description for Product 2',
    },
    {
      title: 'Product 3',
      description: 'This is the description for Product 3',
    },
  ];

  return (
    <div className="w-full md:w-1/2 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Similar Products</CardTitle>
        </CardHeader>
        <CardContent>
          {products.map((product, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold leading-none tracking-tight">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
              <Button size="sm">Add to Cart</Button>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button className="w-full">View More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SimilarProducts;
