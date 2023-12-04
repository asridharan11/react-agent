
import React from 'react';
import { Typography, Button, Card, CardContent, CardTitle, CardDescription } from '@react-agent/shadcn-ui';

export interface RecommendationsProps {}

const Recommendations: React.FC<RecommendationsProps> = () => {
  return (
    <div className="w-full md:w-1/2 px-4">
      <Typography variant="h2" className="text-2xl font-semibold mb-4">Similar Products</Typography>
        <Card>
          <CardContent>
            <CardTitle>Product 1</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur odio magna, id pulvinar magna tincidunt non.
            </CardDescription>
            <Button variant="primary" className="mt-4">Add to Cart</Button>
          </CardContent>
        </Card>
      <Typography variant="h2" className="text-2xl font-semibold mb-4">Recommendations</Typography>
        <Card>
          <CardContent>
            <CardTitle>Product 2</CardTitle>
            <CardDescription>
              Vestibulum eleifend lacus sed justo placerat, vel ullamcorper justo semper.
            </CardDescription>
            <Button variant="primary" className="mt-4">Add to Cart</Button>
          </CardContent>
        </Card>
    </div>
  );
};

export default Recommendations;
