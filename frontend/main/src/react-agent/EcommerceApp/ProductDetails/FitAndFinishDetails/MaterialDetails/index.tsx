
import React from 'react';
import { Typography, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface MaterialDetailsProps {
   productName: string;
   productDescription: string;
   keyFeatures: string[];
   sizes: string[];
   price: number;
   discountedPrice?: number;
   discountPercentage?: number;
   fitAndFinish: string;
   similarProducts: string[];
   recommendations: string[];
}

const MaterialDetails: React.FC<MaterialDetailsProps> = ({
   productName,
   productDescription,
   keyFeatures,
   sizes,
   price,
   discountedPrice,
   discountPercentage,
   fitAndFinish,
   similarProducts,
   recommendations,
}) => {
   return (
      <div className="w-full">
         {/* Product Image */}
         <div className="w-[50%] md:w-[30%]">
            <img src="/path/to/product-image.jpg" alt={productName} className="w-full object-cover" />
         </div>

         {/* Product Details */}
         <div className="w-[50%] md:w-[70%] ml-4">
            <Typography variant="h4" className="text-2xl font-semibold mb-2">
               {productName}
            </Typography>
            <Typography variant="body" className="text-sm text-gray-500 mb-4">
               {productDescription}
            </Typography>

            <Typography variant="h6" className="text-lg font-semibold mb-2">
               Key Features:
            </Typography>
            <ul className="list-disc list-inside mb-4">
               {keyFeatures.map((feature) => (
                  <li key={feature} className="text-sm text-gray-500">
                     {feature}
                  </li>
               ))}
            </ul>

            <Typography variant="h6" className="text-lg font-semibold mb-2">
               Sizes:
            </Typography>
            <div className="flex space-x-4 mb-4">
               {sizes.map((size) => (
                  <Typography key={size} variant="body" className="text-sm capitalize">
                     {size}
                  </Typography>
               ))}
            </div>

            <Typography variant="h6" className="text-lg font-semibold mb-2">
               Price:
            </Typography>
            <div className="flex space-x-2 mb-4">
               {discountedPrice ? (
                  <>
                     <Typography variant="body" className="text-sm line-through">
                        ${price}
                     </Typography>
                     <Typography variant="body" className="text-lg font-semibold text-red-500">
                        ${discountedPrice}
                     </Typography>
                     {discountPercentage && (
                        <Typography variant="body" className="text-sm text-gray-500">
                           ({discountPercentage}% off)
                        </Typography>
                     )}
                  </>
               ) : (
                  <Typography variant="body" className="text-lg font-semibold">
                     ${price}
                  </Typography>
               )}
            </div>

            <Typography variant="h6" className="text-lg font-semibold mb-2">
               Fit and Finish Details:
            </Typography>
            <Typography variant="body" className="text-sm text-gray-500 mb-4">
               {fitAndFinish}
            </Typography>

            {/* Similar Products */}
            <Typography variant="h6" className="text-lg font-semibold mb-2">
               Similar Products:
            </Typography>
            <div className="flex space-x-4 mb-4">
               {similarProducts.map((product) => (
                  <Typography key={product} variant="body" className="text-sm">
                     {product}
                  </Typography>
               ))}
            </div>

            {/* Recommendations */}
            <Typography variant="h6" className="text-lg font-semibold mb-2">
               Recommendations:
            </Typography>
            <div className="flex space-x-4">
               {recommendations.map((product) => (
                  <Typography key={product} variant="body" className="text-sm">
                     {product}
                  </Typography>
               ))}
            </div>
         </div>
      </div>
   );
};

export default MaterialDetails;
