import React, { useState } from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@react-agent/shadcn-ui';

interface SizeChartLinkProps {
  sizeChartUrl: string;
}

const SizeChartLink: React.FC<SizeChartLinkProps> = ({ sizeChartUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Typography variant="body" className="mr-4">
        Size Chart:
      </Typography>
      <Button variant="link" onClick={openDialog}>
        View Chart
      </Button>
      <Dialog open={isOpen} onClose={closeDialog}>
        <DialogContent>
          <DialogTitle>Size Chart</DialogTitle>
          <DialogDescription>{sizeChartUrl}</DialogDescription>
          <Button onClick={closeDialog}>Close</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SizeChartLink;
