
import React from 'react';
import { Typography, Button, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@react-agent/shadcn-ui'

export interface Product {
    id: string
    name: string
    price: number
    imageUrl: string
}

export interface NewArrivalsProps {
    products: Product[]
};

const NewArrivals = (props: NewArrivalsProps) => {
    const { products } = props
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            <Typography variant="h1" className="col-span-3 text-4xl font-extrabold tracking-tight">New Arrivals</Typography>
            {products.map((product) => (
                <div className="flex flex-col items-center" key={product.id}>
                    <img src={product.imageUrl} alt={product.name} className="mb-2"/>
                    <Typography variant="body" className="font-medium">{product.name}</Typography>
                    <Typography variant="body" className="font-medium">{`$${product.price.toFixed(2)}`}</Typography>
                    <DialogTrigger asChild>
                        <Button variant="outline">View Details</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>{product.name}</DialogTitle>
                            <DialogDescription>{`Price: $${product.price.toFixed(2)}`}</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                            <Button variant="primary">Add to Cart</Button>
                        </div>
                    </DialogContent>
                </div>
            ))}
        </div>
    );
};

export default NewArrivals;
