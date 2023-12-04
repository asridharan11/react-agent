
import React from 'react';
import { 
 Typography, 
 Button, 
 NavigationMenu, 
 NavigationMenuContent, 
 NavigationMenuIndicator, 
 NavigationMenuItem, 
 NavigationMenuLink, 
 NavigationMenuList, 
 NavigationMenuTrigger, 
 NavigationMenuViewport, 
 Input 
} from '@react-agent/shadcn-ui'

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="flex h-16 items-center px-4 border-b">
      <div className="flex items-center space-x-4">
        <Typography variant="h4">Logo</Typography>
        <NavigationMenu>
          <NavigationMenuTrigger>
            <Button>Menu</Button>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuViewport>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/products">Products</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about">About</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuViewport>
            <NavigationMenuIndicator />
          </NavigationMenuContent>
        </NavigationMenu>
      </div>
      <Input placeholder="Search..." />
    </header>
  );
};

export default Header;
