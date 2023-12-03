
import React from 'react';
import { Button } from '@react-agent/shadcn-ui';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'default' | 'destructive' | 'secondary' | 'ghost' | 'link' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

interface FormFooterProps {
  prevButtonProps: ButtonProps;
  saveButtonProps: ButtonProps;
  nextButtonProps: ButtonProps;
};

const FormFooter: React.FC<FormFooterProps> = ({ prevButtonProps, saveButtonProps, nextButtonProps }) => {
  return (
    <div className="w-full h-20 px-6 py-6 border-t flex items-center justify-end gap-3">
    {/* implementation of Button from '@react-agent/shadcn-ui' */}
    <Button variant={prevButtonProps.variant || 'outline'} size={prevButtonProps.size || 'default'} onClick={prevButtonProps.onClick}>{prevButtonProps.text}</Button>

    <Button variant={saveButtonProps.variant || 'secondary'} size={saveButtonProps.size || 'default'} onClick={saveButtonProps.onClick}>{saveButtonProps.text}</Button>

    <Button variant={nextButtonProps.variant || 'default'} size={nextButtonProps.size || 'default'} onClick={nextButtonProps.onClick}>{nextButtonProps.text}</Button>
    </div>
  );
};

export default FormFooter;
