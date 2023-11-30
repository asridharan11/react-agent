
import React from 'react';
import { Box, Typography } from '@react-agent/shadcn-ui'

export interface FooterProps {};

const Footer = (props: FooterProps) => {
 return (
  <Box className="py-4 px-2 mt-auto bg-gray-200 w-full flex justify-between">
    <Typography variant="body" align="left" color="gray">
      © 2021 YourWebsiteName - All rights reserved
    </Typography>
    <div>
      <Typography variant="anchor" align="right" color="gray" href="/about">
        About Us
      </Typography>
      <Typography variant="anchor" align="right" color="gray" href="/contact">
        Contact Us
      </Typography>
      <Typography variant="anchor" align="right" color="gray" href="/privacy">
        Privacy Policy
      </Typography>
      <Typography variant="anchor" align="right" color="gray" href="/terms">
        Terms and Conditions
      </Typography>
    </div>
  </Box>
 );
};

export default Footer;
