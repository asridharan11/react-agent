
import React from 'react';
import { Typography, Button, NavLink } from '@react-agent/shadcn-ui'

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface BreadcrumbProps {
  breadcrumbItems: BreadcrumbItem [];
};

const Breadcrumb = ({breadcrumbItems}: BreadcrumbProps) => {

  return (
    <div className="flex space-x-2 px-5 py-2">
      {breadcrumbItems.map((bItem, index) => (
        <React.Fragment key={bItem.name}>
          <NavLink>
            <Typography variant="anchor" href={bItem.path}>{bItem.name}</Typography> 
          </NavLink>
          {index !== breadcrumbItems.length - 1 && (
              <Typography variant="body">/</Typography>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
