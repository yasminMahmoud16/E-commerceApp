import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import toast from './../../../node_modules/react-hot-toast/src/index';


export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [numOfCartItems, setNumOfCartItems] = useState(0);
    const [userCartItems, setUserCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [cartId, setCartId] = useState();
    // add products to cart 
    const addToCart = async (productId) => {

        
        try {

            const res = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
                productId
            }, {
                headers: {
                    token: localStorage.getItem('token')
                }
            });
            
            console.log(res);
            if (res.data.status === 'success') {
                toast.success('Product Added To Cart');
                setNumOfCartItems(res.data.numOfCartItems);
            }
        } catch (err) {
            console.log(err, 'cart context error');
            toast.error('Something Went Wrong');

        }
    };

    // get user cart items
    const getCartItems = async () => {
        try {
            
            const res = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
                headers: {
                    token: localStorage.getItem('token')
                }
            });
            
            console.log(res);
            setUserCartItems(res.data.data.products);
            setTotalPrice(res.data.data.totalCartPrice);
            setNumOfCartItems(res.data.numOfCartItems);
            setCartId(res.data.cartId)
        } catch (err) {
            console.log(err + 'getCartItems context error');
        }
    };

    // update cart item increment & decreament & navbar
    const updateCartItem = async (itemId, count) => {
        try {
                    const res = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${itemId}`, {
                        count
                    }, {
                        headers: {
                            
                            token: localStorage.getItem('token')
                        }
                    })
            console.log(res);
            if(res.data.status === 'success'){
                setUserCartItems(res.data.data.products);
                setTotalPrice(res.data.data.totalCartPrice);
            }
        }catch(err){
            console.log(err+'updateCartItem context error');
        }   

    };

    //! remove item from cart
    const deletCartItem = async (itemId) => {
        try {
                    const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${itemId}`, {
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
            console.log(res);
            if(res.data.status === 'success'){
                setUserCartItems(res.data.data.products);
                setTotalPrice(res.data.data.totalCartPrice);
                setNumOfCartItems(res.data.numOfCartItems);

            }
        }catch(err){
            console.log(err+'deletCartItem context error');
        }   

    };
        useEffect(() => {
        getCartItems(); // Fetch cart when app starts
    }, []);
    return <>
        <CartContext.Provider value={{ addToCart, numOfCartItems,cartId,getCartItems,userCartItems,updateCartItem,totalPrice,deletCartItem }}>
            {children}
        </CartContext.Provider>
    </>
}
