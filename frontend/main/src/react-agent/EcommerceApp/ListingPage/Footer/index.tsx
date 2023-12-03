
import React from 'react';
import { Typography, Button } from '@react-agent/shadcn-ui'


export interface FooterProps {
  additionalInfo?: string;
  onButtonClick?: () => void;
};

const Footer: React.FC<FooterProps> = ({additionalInfo, onButtonClick}) => {
  return (
    <div className="h-12 flex items-center justify-between p-3 bg-gray-200">
      <Typography variant="body" align="left" color="primary">
          {additionalInfo ? additionalInfo : 'Your Website Name © 2022'}
      </Typography>
      <Button variant="outline" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onButtonClick}>Button Name</Button>
    </div>
  );
};

export default Footer;
