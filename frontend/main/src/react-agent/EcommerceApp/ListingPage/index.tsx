
import React, {useState} from 'react';
import { Button, DialogContent, DialogDescription, DialogTitle, DialogTrigger, Typography, Box, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Icons, Input, Label, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, NavLink, Progress, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, ToastAction, ToastClose, ToastDescription, ToastTitle, ToastViewport, TooltipContent, TooltipTrigger } from '@react-agent/shadcn-ui'
import Header from './Header';
import FilterAndSort from './FilterAndSort';
import ProductListing from './ProductListing';
import Pagination from './Pagination';
import QuickView from './QuickView';
import Breadcrumb from './Breadcrumb';
import CTA from './CTA';
import Footer from './Footer';

// Define the type for our product
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    brand: string;
}

export interface ProductListingPageProps {
    products: Product[];
};

const ProductListingPage = ({products}: ProductListingPageProps) => {
    const [currentCategory, setCategory] = useState<string | null>(null)
    const [currentBrand, setBrand] = useState<string | null>(null)
    const [sortOrder, setSortOrder] = useState<string>('relevance') // could be 'priceHighToLow' or 'priceLowToHigh' 

    const sortedAndFilteredProducts = products.filter((product) => 
        (!currentBrand || product.brand === currentBrand) && (!currentCategory || product.category === currentCategory)
    ).sort((a, b) => {
        if(sortOrder === 'priceLowToHigh')
            return a.price - b.price
        else if(sortOrder === 'priceHighToLow')
            return b.price - a.price
        return 0
    })

    const handleAddToCart = (id: string) => {
        // handle your add to cart logic here
        console.log("Adding product with id", id, "to the cart");
    }

    return (
        <div className="flex flex-col">
            <Header logo={<img src="/logo.jpg"></img>} navigationItems={['Home', 'About Us', 'Contact']} placeholder="Search products" />
            <Breadcrumb breadcrumbItems={[{name: 'Home', path: '/home'}, {name: 'Products', path: '/products'}]} />
            <div className="flex">
                <FilterAndSort 
                    categories={Array.from(new Set(products.map((product) => product.category)))} 
                    brands={Array.from(new Set(products.map((product) => product.brand)))} 
                    onSortChange={setSortOrder} 
                    setCategory={setCategory} 
                    setBrand={setBrand}
                />
                <ProductListing 
                    products={sortedAndFilteredProducts.map(({imageUrl, name, description, price}) => 
                        ({imageUrl, name, description, price}))
                    } 
                    addToCart={handleAddToCart}
                />
            </div>
            <Pagination currentPage={1} totalPage={10} onPageChange={(page: number) => console.log("Going to page", page)} />
            <CTA onContinueShopping={() => console.log("Continue shopping")} onProceedCheckout={() => console.log("Proceed to checkout")} />
            <Footer onClick={() => console.log("Footer action invoked")} />
        </div>
    );
};

export default ProductListingPage;
