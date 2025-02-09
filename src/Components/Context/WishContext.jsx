import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import toast from './../../../node_modules/react-hot-toast/src/index';

 export const WishContext = createContext();
export default function WishContextProvider({ children }) {

    const [wishItems, setWishIems] = useState([]);
    const [userwishItems, setUserWishIems] = useState([]);
    const [wishListNumber, setWishListNumber] = useState(0);

    // add products to wishlist
    const addToWishList = async (productId) => {
        try {
            
            const res = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
                productId
            }, {
                headers: {
                    token: localStorage.getItem('token')
                }
            });

            
            if (res.data.status === 'success') {
                toast.success('Product Added To Wishlist');
                setWishIems(prev => [...prev, productId])
                getProWishList();
                console.log(res);
            }
        } catch (err) {
            console.log(err, 'wish context error');
            
        }
    }
    
        // get products from wishlist

        const getProWishList = async () => {
            try {
                const res = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
                    headers: {
                        token: localStorage.getItem('token')}
                    
                })
                    console.log(res);
                setUserWishIems(res.data.data);
                setWishListNumber(res.data.count );
            } catch (err) {
                console.log(err, 'getProWishList context error');
            }
    };

    // update

    const updateWishLiist = () => {
        try {
            
            const res = axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
                headers: {
                    token:localStorage.getItem('token')
                }
            })
            console.log(res);
    
            if (res.data.status == 'success') {
                setUserWishIems(res.data.count);
                                // setWishIems((prev) => prev.filter((id) => id !==/ productId)); // Update state

            }
        } catch (err) {
            console.log(err +'err from update wish list ');
            
        }
        
    }
    
    //! remove product from wishlist
    const removeProdWishList = async (productId) => {
        try {
            
            const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
                headers: {
                    token: localStorage.getItem('token')
                }
            });
            console.log(res);
            if (res.data.status === 'success') {
                toast.success('Product Removed From Wishlist');
                setWishIems(prev => prev.filter(id => id !== productId));

            getProWishList(); 
            updateWishLiist(); 
            }

        } catch (err) {
            console.log(err, 'removeProdWishList context error');
            
        }
    }

    

            useEffect(() => {
            getProWishList(); // Fetch cart when app starts
        }, []);

    return <>
        <WishContext.Provider value={{addToWishList,wishListNumber,updateWishLiist,wishItems,getProWishList,userwishItems,removeProdWishList}}>
            {children}
        </WishContext.Provider>
    </>
}
