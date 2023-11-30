
import React from 'react';
import { Typography, Button, Card, CardDescription } from '@react-agent/shadcn-ui';


export interface Review {
    userName: string;
    rating: number;
    date: string;
    description: string;
}

export interface UserReviewsProps {
    reviews: Review[];
};

const UserReviews: React.FC<UserReviewsProps> = ({reviews}) => {

    const RenderReviews = () => {
        return reviews.map((review: Review) => {
            return (
                <Card key={review.userName} className="mt-2">
                    <Typography variant="h4" color="primary">
                        {review.userName}
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        Rating: {review.rating}/5
                    </Typography>
                    <Typography variant="body" color="gray">
                        Date: {review.date}
                    </Typography>
                    <CardDescription>
                        {review.description}
                    </CardDescription>
                    <Button>Reply</Button>
                </Card>
            );
        });
    }

    return (
        <div className="p-4">
            <Typography variant="h2" color="primary" className="mb-4">
                User Reviews:
            </Typography>
            {RenderReviews()}
        </div>
    );
};

export default UserReviews;
