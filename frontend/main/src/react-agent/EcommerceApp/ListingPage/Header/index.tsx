import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@react-agent/shadcn-ui';

export interface HeaderProps {
  logo: string; // Expected logo URL
  menuItems: string[]; // Expected array of menu item names
}

const Header: React.FC<HeaderProps> = ({ logo, menuItems }) => {
  return (
    <header className="flex h-12 items-center justify-around bg-blue-500 text-white">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-4" />
        <h1 className="font-semibold text-lg">My Website</h1>
      </div>

      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-lg cursor-pointer">Menu</NavigationMenuTrigger>
          <NavigationMenuViewport>
            <NavigationMenuContent>
              <NavigationMenuList>
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink href={`/#${item}`} className="text-white">
                      {item}
                    </NavigationMenuLink>
                    <NavigationMenuIndicator />
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuViewport>
        </NavigationMenuItem>
      </NavigationMenu>

      <div className="form-control">
        <input type="search" placeholder="Search..." className="w-60 p-2" />
      </div>
    </header>
  );
};

export default Header;
