import React from 'react';
import TimesheetSubmission, { NavbarProps } from './index';

const TimesheetSubmissionDemo: React.FC = () => {
  const logoUrl: string = 'https://example.com/your-logo.png';
  const menuItems: NavbarProps['menuItems'] = [
    { label: 'Home', link: '/home' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <div className="m-4">
      <TimesheetSubmission logoUrl={logoUrl} menuItems={menuItems} />
    </div>
  );
};

export default TimesheetSubmissionDemo;
