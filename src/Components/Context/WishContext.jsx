import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const WishContext = createContext();

export default function WishContextProvider({ children }) {
    const [wishItems, setWishItems] = useState([]);
    const [userwishItems, setUserWishItems] = useState([]);
    const [wishListNumber, setWishListNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // Add product to wishlist
    const addToWishList = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("No token found in localStorage");
                return;
            }

            const res = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
                productId
            }, {
                headers: { token }
            });

            if (res.data.status === 'success') {
                toast.success('Product Added To Wishlist');
                const updatedWishItems = [...wishItems, productId];
                setWishItems(updatedWishItems);
                localStorage.setItem('wishItems', JSON.stringify(updatedWishItems));
                getProWishList();
            }
        } catch (err) {
            console.error("Error adding to wishlist:", err);
        }
    };

    // Get wishlist items
    const getProWishList = async () => {
        setIsLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("No token found in localStorage");
                setIsLoading(false);
                return;
            }

            const res = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
                headers: { token }
            });

            if (res.data.data) {
                const wishIds = res.data.data.map(item => item._id);
                setUserWishItems(res.data.data);
                setWishItems(wishIds);
                setWishListNumber(res.data.count || wishIds.length);
                localStorage.setItem('wishItems', JSON.stringify(wishIds));
            }
        } catch (err) {
            console.error("Error fetching wishlist:", err);
        } finally {
            setIsLoading(false);
        }
    };

    // Remove product from wishlist
    const removeProdWishList = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("No token found in localStorage");
                return;
            }

            const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
                headers: { token }
            });

            if (res.data.status === 'success') {
                toast.success('Product Removed From Wishlist');
                const updatedWishItems = wishItems.filter(id => id !== productId);
                setWishItems(updatedWishItems);
                localStorage.setItem('wishItems', JSON.stringify(updatedWishItems));
                getProWishList();
            }
        } catch (err) {
            console.error("Error removing from wishlist:", err);
        }
    };

    useEffect(() => {
        const storedWishItems = JSON.parse(localStorage.getItem('wishItems')) || [];
        setWishItems(storedWishItems);
        getProWishList();
    }, []);

    return (
        <WishContext.Provider value={{ addToWishList, wishListNumber, wishItems, getProWishList, userwishItems, removeProdWishList, isLoading }}>
            {children}
        </WishContext.Provider>
    );
}
