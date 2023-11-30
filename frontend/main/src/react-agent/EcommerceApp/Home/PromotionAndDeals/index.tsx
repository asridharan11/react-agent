
import React from 'react';
import { Box, Card, CardContent, CardDescription, Typography, Button } from '@react-agent/shadcn-ui';

interface Deal {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
}

export interface PromotionAndDealsProps {
    deals: Deal[];
};

const PromotionAndDeals: React.FC<PromotionAndDealsProps> = ({ deals }) => {
    return (
        <Box>
            <Typography variant="h2" className="mb-4">Promotions and Deals</Typography>
            <div className="grid grid-cols-2 gap-4">
                {deals.map((deal, index) => (
                    <Card key={index}>
                        <img src={deal.imageUrl} alt={deal.title} />
                        <CardContent>
                            <Typography variant="h4">{deal.title}</Typography>
                            <CardDescription>{deal.description}</CardDescription>
                            <Button variant="link" href={deal.linkUrl}>Shop Now</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Box>
    );
};

export default PromotionAndDeals;
