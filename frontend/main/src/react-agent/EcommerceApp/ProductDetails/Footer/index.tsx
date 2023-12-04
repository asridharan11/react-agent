
import React from 'react';
import { Typography, Box, Button } from '@react-agent/shadcn-ui';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box className="flex h-16 items-center px-4 border-t">
      <Typography variant="body" className="text-gray">
        {/* Your footer content goes here */}
      </Typography>
      <Button variant="outline" className="ml-auto">
        {/* Your button text goes here */}
      </Button>
    </Box>
  );
};

export default Footer;
