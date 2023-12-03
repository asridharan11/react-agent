
import React from 'react';
import { Typography, Button } from '@react-agent/shadcn-ui';

export interface FormHeaderProps {
  title: string; 
  buttonLabel: string; 
  onSubmit: () => void; 
};

const FormHeader = ({title, buttonLabel, onSubmit}: FormHeaderProps) => {
return (
  <div className="h-16 flex items-center justify-between px-6">
    <Typography variant="h3">{title}</Typography>
    <Button onClick={onSubmit}>{buttonLabel}</Button>
  </div>
  );
};

export default FormHeader;
