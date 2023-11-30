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

// Define the types for our props
export interface NavigationMenuProps {
  // Add any specific props you need.
}

const NavigationMenuComponent: React.FC<NavigationMenuProps> = (props) => {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="p-4">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4 3a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm6 7a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </NavigationMenuTrigger>
      </NavigationMenuItem>

      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/home">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/shop">Shop</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/categories">Categories</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/deals">Deals</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/my-account">My Account</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuIndicator className="p-2 mt-2">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M4 3a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm6 7a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </NavigationMenuIndicator>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;
