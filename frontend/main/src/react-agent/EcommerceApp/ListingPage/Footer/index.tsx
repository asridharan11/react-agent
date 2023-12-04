
import React from 'react';
import { Typography, Button, NavLink } from '@react-agent/shadcn-ui';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="flex h-16 items-center px-4 border-t">
      <Typography variant="body" color="gray" className="mr-4">
        Consistent footer with additional links and information
      </Typography>
      <NavLink>Link1</NavLink>
      <NavLink>Link2</NavLink>
      <Button variant="outline" size="default">
        Contact Us
      </Button>
    </footer>
  );
};

export default Footer;
