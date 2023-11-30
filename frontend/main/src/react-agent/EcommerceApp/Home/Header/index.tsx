import React from 'react';
import { NavigationMenu } from '@react-agent/shadcn-ui';
import NavigationMenuComponent from './NavigationMenu'; // Assuming there's a local component created as per previous examples

export interface HeaderProps {
  logo: string; // path to the logo image
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <img src={logo} alt="website logo" className="w-auto h-8" />
      <NavigationMenuComponent />
    </header>
  );
};

export default Header;
