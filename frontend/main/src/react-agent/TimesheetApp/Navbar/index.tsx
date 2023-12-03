import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Typography,
} from '@react-agent/shadcn-ui';

export interface NavbarProps {
  logoUrl: string;
  menuItems: Array<{
    label: string;
    link: string;
  }>;
}

const Navbar = ({ logoUrl, menuItems }: NavbarProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const onItemClick = (itemLabel: string) => {
    setSelected(itemLabel);
  };

  return (
    <NavigationMenu>
      <NavigationMenuViewport className="hidden md:flex md:flex-shrink-0 md:h-full md:w-64">
        <NavigationMenuContent className="w-full h-16 flex justify-between items-center px-6">
          <img src={logoUrl} alt="Logo" />
        </NavigationMenuContent>
        <NavigationMenuList className="w-full flex flex-col">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                onClick={() => onItemClick(item.label)}
                className={selected === item.label ? 'bg-blue-500 text-white' : ''}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenuViewport>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="md:hidden">
          <NavigationMenuIndicator />
        </NavigationMenuTrigger>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};

export default Navbar;
