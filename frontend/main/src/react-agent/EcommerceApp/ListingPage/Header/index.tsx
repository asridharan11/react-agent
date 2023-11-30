 
import React from 'react';
import { Typography, NavigationMenu, Input } from '@react-agent/shadcn-ui'

export interface HeaderProps {
  logo: React.ReactNode; // The logo can be any renderable element (component, jsx, etc.)
  navigationItems: string[]; // Navigation menu items
  placeholder: string; // The placeholder text for the Search bar
};

const Header: React.FC<HeaderProps> = ({ logo, navigationItems, placeholder }) => {
  return (
    <div className='flex justify-between items-center p-5'>
      <div className='flex justify-between items-center w-full'>
        <div>{logo}</div>
        <nav className='w-full'>
          <NavigationMenu>
            {navigationItems.map((item, index) => 
               <span key={index}>{item}</span>
            )}
          </NavigationMenu>
        </nav>
        <div className='w-full'>
          <Input type='text' placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
};

export default Header;
