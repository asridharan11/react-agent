
import React from 'react';
import { Box, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Typography } from '@react-agent/shadcn-ui'
import SimilarProducts from './SimilarProducts';
import Recommendations from './Recommendations';

export interface SimilarProductsAndRecommendationsProps {};

const SimilarProductsAndRecommendations: React.FC<SimilarProductsAndRecommendationsProps> = () => {
  return (
    <Box className="flex flex-wrap -mx-4">
      <SimilarProducts className="w-full md:w-1/2 px-4" />
      <Recommendations className="w-full md:w-1/2 px-4" />
    </Box>
 );
};

export default SimilarProductsAndRecommendations;
