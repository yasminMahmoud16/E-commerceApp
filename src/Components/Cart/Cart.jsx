import  { useContext, useEffect } from 'react'
import { CartContext } from '../Context/CartContext';
import emptyCaart from '../../assets/empty-cart (1).png'
import { Link } from 'react-router-dom';
export default function Cart() {
    const { getCartItems ,userCartItems ,updateCartItem,totalPrice,deletCartItem} = useContext(CartContext);
    
    useEffect(() => {
        getCartItems();
    }, []);
    return <>
        <h1 className='text-3xl capitalize text-center mt-5 font-bold text-[#16C216]'>shopping bag</h1>

        <section className='my-10'>
            <div className="container">
                

                <div className='grid items-center md:items-start grid-cols-1 md:grid-cols-6 gap-4 '>

                                <div className="relative overflow-x-auto  shadow-md sm:rounded-lg h-screen  md:col-span-4">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-10 ">
                                        <thead className="text-xs border-b-2 border-solid border-gray-300  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>

                                            <th scope="col" className="px-6 py-3 text-gray-500">
                                            Product
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-gray-500">
                                            title
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-gray-500">
                                            quantity
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-gray-500">
                                            Price
                                            </th>

                                        </tr>
                                        </thead>
                                    <tbody >
                                {userCartItems.length === 0 ? <tr className="text-center ">
                                    <td className="flex flex-col items-center justify-center py-4">
                                        <div className=' '>

                                                <span className="text-lg font-semibold text-gray-500 dark:text-gray-400">Cart is Empty</span>
                                                <img src={emptyCaart} className="w-32 md:w-48 mt-3" alt="Empty Cart" />
                                        </div>
                                            </td>
                                        </tr>: <>
                                            {userCartItems?.map((item) => (
                                            
                                        <tr key={item.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="p-4">
                                            <img src={item.product.imageCover}  className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {item.product.title} 
                                            </td>
                                            <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <button disabled={item.count===1} onClick={()=>{updateCartItem(item.product.id,item.count -1)}} className="inline-flex items-center justify-center p-1 me-3 cursor-pointer text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                                </svg>
                                                </button>
                                                <div>
                                                            <span>{item.count }</span>
                                                </div>
                                                <button onClick={()=>{updateCartItem(item.product.id,item.count +1)}} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                                </svg>
                                                </button>
                                            </div>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {item.price} EGP
                                                    </td>
                                                    
                                            <td className="px-6 py-4">
                                            <i onClick={()=>{deletCartItem(item.product.id)}}  className=" fa-solid fa-trash text-xl font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline"></i>
                                            </td>
                                        </tr>
                                        ))}
                                        </>}
                                        

                                        </tbody>
                                    </table>
                            
                                </div>
                        <div className=' mx-auto md:col-span-2 '>
                            

                            <div className="max-w-sm p-6 flex flex-col gap-4 bg-[#c0d7c0] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <div className='cart-header border-b-2 border-gray-500'>
                                    <h1 className='text-3xl mb-3 capitalize font-semibold'>order summary</h1>
                                </div>

                                <div className='card-body flex flex-col gap-3'>
                                    <div className='flex justify-between'>

                                        <p>subtotal: </p>
                                        <span>{ totalPrice}</span>
                                    </div>
                                    <div className='flex justify-between'>

                                        <p>shipping: </p>
                                        <span>free</span>
                                    </div>
                                </div>
                                <div className="card-footer border-t-2 border-gray-500">
                                    <div className='flex justify-between'>
                                        <p>total: </p>
                                        <span>{ totalPrice} EGP</span>
                                </div>
                                <div className="btns mt-4 flex items-center justify-evenly">
                                    <Link to={'/payment'} >
                                        <button type="button" className=" capitalize focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">countinue your order</button>
                                    </Link>
                                    {/* <Link to={'/payment'}>
                                        <button type="button" className=" capitalize focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">visa payment</button>
                                    </Link> */}

                                </div>
                                </div>

                            </div>


                        </div>
                </div>


            </div>
        </section>
    </>
}
