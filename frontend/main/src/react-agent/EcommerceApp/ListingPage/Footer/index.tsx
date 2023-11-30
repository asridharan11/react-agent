
import React from 'react';
import { Typography, Button, Box } from '@react-agent/shadcn-ui';

export interface FooterProps {
  onClick?: () => void;
};

const Footer: React.FC<FooterProps> = ({onClick}) => {
  return (
    <Box className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <Typography variant="h6" align="center" color="white">
        Your Company © 2022
      </Typography>
      <Box className="space-x-4">
        <Button variant="link" onClick={onClick}>About</Button>
        <Button variant="link" onClick={onClick}>Help</Button>
        <Button variant="link" onClick={onClick}>Privacy</Button>
        <Button variant="link" onClick={onClick}>Terms</Button>
      </Box>
    </Box>
  );
};

export default Footer;
