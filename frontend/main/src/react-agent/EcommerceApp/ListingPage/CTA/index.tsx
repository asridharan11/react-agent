import React from 'react';
import { Typography, Button, DialogContent, DialogDescription, DialogTrigger, Dialog } from '@react-agent/shadcn-ui';

export interface CTAProps {
  onContinueShopping: () => void;
  onProceedCheckout: () => void;
}

const CTA: React.FC<CTAProps> = ({ onContinueShopping, onProceedCheckout }) => {
  return (
    <div className="flex justify-center items-center p-5">
      <Typography variant="h1" className="text-4xl font-bold tracking-tight lg:text-5xl">
        Ready to Checkout?
      </Typography>
      <Dialog>
        <DialogContent>
          <DialogTrigger asChild>
            <Button onClick={onProceedCheckout} variant="default">
              Proceed to Checkout
            </Button>
          </DialogTrigger>

          <DialogDescription>
            <Typography variant="body">Or continue shopping to add more items.</Typography>
          </DialogDescription>

          <Button onClick={onContinueShopping} variant="link">
            Continue Shopping
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CTA;
