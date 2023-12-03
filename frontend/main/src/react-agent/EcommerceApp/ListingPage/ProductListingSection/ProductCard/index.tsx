
import React from 'react';
import { Card, CardContent, CardHeader, Typography, Button } from '@react-agent/shadcn-ui';

interface ProductCardProps {
    productImage: string;
    productName: string;
    productPrice: string;
    productDescription: string;
    onAddToCartClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const { productName, productImage, productPrice, productDescription, onAddToCartClick } = props;

    return (
        <Card className="flex flex-col w-60 h-auto m-2">
            <CardHeader>
                <img src={productImage} alt={productName} className="h-48 w-full object-cover" />
                <Typography variant="h2" className="mt-4">
                    {productName}
                </Typography>
            </CardHeader>

            <CardContent>
                <Typography variant="body" className="text-lg">
                    {productPrice}
                </Typography>
                <Typography variant="body">
                    {productDescription}
                </Typography>
                <Button onClick={onAddToCartClick} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
