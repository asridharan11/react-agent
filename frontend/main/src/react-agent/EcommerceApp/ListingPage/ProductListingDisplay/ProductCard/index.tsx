
import React from 'react';
import { Card, CardContent, CardDescription, Button, Typography } from '@react-agent/shadcn-ui';

export interface ProductCardProps {
 productImage: string;
 productTitle: string;
 productPrice: string;
 productDescription: string;
 handleAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
 productImage,
 productTitle,
 productPrice,
 productDescription,
 handleAddToCart
}) => {
 return (
 <Card className="w-full p-4 flex flex-col items-center border">
 <img src={productImage} alt={productTitle} className="w-full h-64 object-cover mb-4" />
 <CardTitle className="text-lg font-bold">{productTitle}</CardTitle>
 <CardDescription className="text-sm">{productDescription}</CardDescription>
 <CardContent className="text-sm">{productPrice}</CardContent>
 <Button className="w-full py-2 bg-primary text-white rounded" onClick={handleAddToCart}>
 Add to Cart
 </Button>
 </Card>
 );
};

export default ProductCard;
