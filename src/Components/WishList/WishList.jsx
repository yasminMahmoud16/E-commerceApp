import  { useContext, useEffect } from 'react'
import { WishContext } from '../Context/WishContext';
import { CartContext } from '../Context/CartContext';

export default function WishList() {
    const { getProWishList, userwishItems ,removeProdWishList } = useContext(WishContext);
    const { addToCart } = useContext(CartContext);
    useEffect(() => {
        getProWishList();
    }, []);
    return <>
        <section className='min-h-screen'>
            <div className="container">
              <h1 className='text-center text-3xl text-[#16C216]'>your wish list </h1>
                

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
        <tbody>
                            {userwishItems.map((item) =>(
                    
                        <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4">
                            <img src={item.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {item.title}
                            </td>
                            <td className="px-6 py-4">
                            <div className="flex items-center">

                            </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {item.price} EGP
                            </td>
                            <td className="px-6 py-4">
                            <button onClick={()=>{removeProdWishList(item._id)}}  className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                            </td>
                            <td className="px-6 py-4">
                            <button onClick={()=>{addToCart(item._id)}}  className="font-medium text-red-600 dark:text-red-500 hover:underline">add to cart</button>
                            </td>
                        </tr>
                    ))}

    </tbody>
  </table>
</div>


            </div>
        </section>

    </>
}
