import axios from 'axios';
import { createContext } from 'react'
import { useQuery } from 'react-query';


export const ProductContext = createContext();
export default function ProductContextProvider({ children }) {
    

    const getProducts = async () => {
        const res = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
        console.log(res);
        return res.data.data; // Extract the actual product data
        
    };

    // Use `useQuery` properly
    const { data: allProductsData , isLoading } = useQuery({
        queryKey: ['allProducts'], // Wrap key in an array
        queryFn: getProducts,

    });
    return <>
        <ProductContext.Provider value={{allProductsData,isLoading} }>
            {children}
        </ProductContext.Provider>
    </>
}
