
import React, { useState } from "react";
import { Typography, Box, Card, CardContent, CardFooter, CardHeader, CardTitle, Button } from "@react-agent/shadcn-ui";
import ProductCard from "./ProductCard";

export interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  description: string;
}

export interface ProductListingSectionProps {
  products: Product[];
  onAddProductToCart: (productId: string) => void;
}

const ProductListingSection: React.FC<ProductListingSectionProps> = (props) => {
  const { products, onAddProductToCart } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Box className="w-full flex flex-wrap justify-center">
      {currentProducts.map((product: Product) => (
        <ProductCard
          key={product.id}
          productImage={product.image}
          productName={product.name}
          productPrice={product.price}
          productDescription={product.description}
          onAddToCartClick={() => onAddProductToCart(product.id)}
        />
      ))}
      
      <Box className="flex items-center justify-center w-full mt-5">
        <Button
          className="bg-blue-500 m-2 py-2 px-4 rounded text-white"
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page, index) => (
          <Button
            key={index}
            className={`m-2 py-2 px-4 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-white border-blue-500 border text-blue-500"}`}
            onClick={() => paginate(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          className="bg-blue-500 m-2 py-2 px-4 rounded text-white"
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ProductListingSection;
