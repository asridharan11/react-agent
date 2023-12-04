
import React from 'react';
import { Typography, Card, CardContent, CardDescription } from '@react-agent/shadcn-ui';
import MaterialDetails from './MaterialDetails';
import CareInstructions from './CareInstructions';

export interface FitAndFinishDetailsProps {}

const FitAndFinishDetails: React.FC<FitAndFinishDetailsProps> = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap w-full px-4 py-2">
      <MaterialDetails className="w-full md:w-1/2" />
      <CareInstructions className="w-full md:w-1/2" />
    </div>
  );
};

export default FitAndFinishDetails;
