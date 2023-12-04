
import React from 'react';
import { Button, Typography, Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@react-agent/shadcn-ui';

export interface SortSectionProps {};

const SortSection: React.FC<SortSectionProps> = (props) => {
 return (
 <div className="flex flex-col space-y-4">
   <div className="w-full p-2">
     <Button onClick={() => { /* handle sorting by relevance */ }}>
       Sort by Relevance
     </Button>
   </div>
   <div className="w-full p-2">
     <Button onClick={() => { /* handle sorting by price */ }}>
       Sort by Price
     </Button>
   </div>
 </div>
 );
};

export default SortSection;
