
import React from 'react';
import { Typography, Card, CardContent, CardDescription } from '@react-agent/shadcn-ui';

interface CareInstructionsProps {
  instructions: string[];
}

const CareInstructions: React.FC<CareInstructionsProps> = ({ instructions }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">Care Instructions</Typography>
        {instructions.map((instruction, index) => (
          <CardDescription key={index}>{instruction}</CardDescription>
        ))}
      </CardContent>
    </Card>
  );
};

export default CareInstructions;
