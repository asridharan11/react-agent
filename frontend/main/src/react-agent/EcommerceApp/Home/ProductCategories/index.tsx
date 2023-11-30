
import React from 'react';
import { Typography, Card, CardTitle, CardDescription, Button } from '@react-agent/shadcn-ui'

interface Category {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ProductCategoriesProps {
  categories: Category[];
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <Card key={category.id} className="shadow-lg rounded-lg">
          <img
            className="h-48 rounded-t-lg w-full object-cover"
            src={category.imageUrl}
            alt={category.title}
          />
          <div className="p-6">
            <CardTitle>{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
            <div className="pt-4">
              <Button className="w-full mt-3 bg-blue-500 text-white py-2 rounded">Explore</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductCategories;
