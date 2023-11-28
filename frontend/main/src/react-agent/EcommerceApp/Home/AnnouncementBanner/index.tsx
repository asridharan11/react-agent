
import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@react-agent/shadcn-ui'

export interface AnnouncementBannerProps {
    announcements: string[]; //Determine the types based on your requirements
};

const AnnouncementBanner:React.FC<AnnouncementBannerProps> = ({ announcements }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // auto rotate announcements every 20 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
            );
        }, 20000);
        return () => clearInterval(timer); // clear the interval on unmount
    }, [announcements]);

    return (
        <Box className="w-full bg-blue-500 text-white p-4">
            {announcements.length ? (
                <Typography variant="h1" align="center">
                    {announcements[currentIndex]}
                </Typography>
            ) : (
                <Typography variant="h1" align="center">
                    Loading...
                </Typography>
            )}
        </Box>
    );
};
export default AnnouncementBanner;
