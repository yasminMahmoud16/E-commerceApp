import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductsCard(props) {
    console.log(props);
    const { title, ratingsAverage, price, imageCover, description, _id } = props.products;
    let rate = Math.floor(ratingsAverage);
    
    return <>

        <div className="mb-9 bg-white  rounded-lg  text-center">
            <Link to={`/details/${_id}`} >
                    <div>
                        <img className="p-8 rounded-t-lg h-[300px] w-full" src={imageCover} alt="product image" />
                    </div>
                    <div className="px-5 pb-5">
                        <div>
                                    <h5 className="tracking-tight font-bold dark:text-white">{title.slice(0,23)+"..."}</h5>
                                    {/* <p className='text-sm text-gray-400 h-[40px]'>{description.slice(0,60) + "..."}</p> */}
                        </div>
                        <div className="flex items-center justify-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse ">
                                        {Array.from({ length: rate },(_, index)=>{
                                            return <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                </svg>
                                            })}

                            </div>
                                    <span className="bg-[#c7f1c7] text-[#175d17] text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{ ratingsAverage}</span>
                        </div>

                    </div>
            </Link>
            <div className='flex flex-col gap-2 justify-between items-center px-5 pb-5'>
                                    <span className="text-lg font-semibold text-[#16C216] dark:text-white">{ price} <span className='text-gray-900'>EGP</span> </span>

                <button className="w-full ms-auto block capitalize text-white transition-all bg-[#16C216] hover:bg-[#0b850b] focus:ring-4 focus:outline-none focus:ring-[#16C216] font-medium  text-sm px-5 py-2.5 text-center dark:bg-[#16C216] dark:hover:bg-[#16C216] dark:focus:ring-[#16C216]">add to cart <i className="fa-solid fa-cart-shopping"></i></button>
            </div>



</div>

    </> 
}
