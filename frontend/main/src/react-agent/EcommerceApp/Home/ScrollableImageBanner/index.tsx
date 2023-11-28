
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@react-agent/shadcn-ui'

type ImageData = {
  title: string;
  description: string;
  url: string;
};

export interface ScrollableImageBannerProps {
  data: ImageData[];
}

const ScrollableImageBanner: React.FC<ScrollableImageBannerProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => activeIndex === data.length - 1 ? 0 : activeIndex + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  return (
    <Box className="flex flex-row w-full h-64 overflow-x-auto">
      {
        data.map((item, index) => (
          <div key={index} className={`w-full h-full ${index === activeIndex ? "" : "hidden"}`}>
            <img src={item.url} alt={item.title} className="object-cover h-full w-full" />
            <Box className="absolute bottom-0 right-0 p-4 bg-white bg-opacity-50">
              <Typography>{item.title}</Typography>
              <Typography>{item.description}</Typography>
              <Typography>{`Image ${index + 1} of ${data.length}`}</Typography>
            </Box>
          </div>
        ))
      }
    </Box>
  );
};

export default ScrollableImageBanner;
