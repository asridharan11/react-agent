import React from 'react';
import {
  NavigationMenu as Menu,
  NavigationMenuContent as Content,
  NavigationMenuIndicator as Indicator,
  NavigationMenuItem as Item,
  NavigationMenuLink as Link,
  NavigationMenuList as List,
  NavigationMenuTrigger as Trigger,
  NavigationMenuViewport as Viewport,
} from '@react-agent/shadcn-ui';

export interface NavigationMenuProps {
  menuItems: {
    name: string;
    link: string;
    active: boolean;
  }[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ menuItems }) => {
  return (
    <Menu>
      <Viewport>
        <List>
          {menuItems.map((item, index) => (
            <Item key={index}>
              <Content>
                <Trigger>
                  <Link href={item.link} className={item.active ? 'text-blue-500' : 'text-black'}>
                    <Indicator active={item.active} />
                    {item.name}
                  </Link>
                </Trigger>
              </Content>
            </Item>
          ))}
        </List>
      </Viewport>
    </Menu>
  );
};

export default NavigationMenu;
