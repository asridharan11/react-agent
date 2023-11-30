
import React from 'react';
import { Button, Typography } from '@react-agent/shadcn-ui';

export interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPage, onPageChange }) => {

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center p-5">
      <Button variant={currentPage === 1 ? 'secondary' : 'default'} onClick={handlePrevious}>Previous</Button>
      <Typography variant="body" color="primary" className="mx-4">Page {currentPage} of {totalPage}</Typography>
      <Button variant={currentPage === totalPage ? 'secondary' : 'default'} onClick={handleNext}>Next</Button>
    </div>
  );
};

export default Pagination;
