
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button, Typography, HoverCard, HoverCardContent, HoverCardTrigger } from '@react-agent/shadcn-ui'

export interface QuickViewProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
  };
}

const QuickView: React.FC<QuickViewProps> = ({ product }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="cursor-pointer">
          <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-64" />
          <Typography variant="h4" className="mt-2">
            {product.name}
          </Typography>
          <Typography variant="h6" className="mt-2">
            ${product.price}
          </Typography>
        </div>
      </HoverCardTrigger>
      <HoverCardContent side="bottom" align="center">
        <Card>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{product.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => { console.log('Add product to cart') }}>
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </HoverCardContent>
    </HoverCard>
  );
};

export default QuickView;
