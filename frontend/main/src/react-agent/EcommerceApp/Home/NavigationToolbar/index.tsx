import React from 'react';
import { Box, Typography, Icons } from '@react-agent/shadcn-ui';
import NavigationMenu from './NavigationMenu';

export interface NavigationToolbarProps {
  menuItems: {
    name: string;
    link: string;
    active: boolean;
  }[];
  companyLogo: string;
  companyName: string;
  cartItemCount: number;
}

const NavigationToolbar: React.FC<NavigationToolbarProps> = ({
  menuItems,
  companyLogo,
  companyName,
  cartItemCount,
}) => {
  return (
    <Box className="NavigationToolbar flex flex-row justify-between items-center h-16 p-4 border-b">
      <Box className="flex items-center space-x-4">
        <img src={companyLogo} alt={companyName} className="CompanyLogo w-10 h-10" />
        <Typography className="CompanyName text-xl">{companyName}</Typography>
      </Box>

      <Box className="flex items-center space-x-4">
        <NavigationMenu menuItems={menuItems} />
        <Box className="flex items-center space-x-2">
          <Icons.Trash className="CartLogo w-10 h-10" />
          {cartItemCount > 0 && <Typography className="text-red-600">{cartItemCount}</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationToolbar;
