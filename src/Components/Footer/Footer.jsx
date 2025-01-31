import React from 'react'
import amazon from '../../assets/amazon-pay.png'
import amrican from '../../assets/American-Express-Color.png'
import masterCard from '../../assets/mastercard.webp'
import paypal from '../../assets/paypal.png'
import appleStore from'../../assets/get-apple-store.png'
import googleStore from'../../assets/get-google-play.png'

export default function Footer() {
    return <>
        <footer className='bg-[#f0f3f2] p-6'>
            <div className="container">
                <div className="paragraph flex flex-col items-center justify-center mb-5 md:items-start">

                <h2 className='capitalize'>get the fresh cart app</h2>
                <span className='capitalize text-xs text-slate-600'>we will send you a link, open it in your phone to download the app </span>
                </div>

            <div className="email-input flex flex-col items-center justify-center md:flex-row ">
                <input type="email" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0aad0a] focus:border-[#0aad0a] block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />

                <button type="button" className="text-md font-normal text-white bg-[#0aad0a] transition-all hover:bg-[#16c216]  mt-2 ml-4 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 capitalize dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">share app link</button>

            </div>

            <div className="info flex flex-col items-center mt-4 md:flex-row justify-between">
                <div className="payment-images flex flex-col md:flex-row items-center justify-center gap-3">
                        
                        <p className='capitalize md:text-xs'>payment methods</p>

                            <div className="img-div w-[50px] mt-2">
                                <img src={amazon} alt="" className='w-[100%]' />

                            </div>
                            <div className="img-div w-[50px] ">
                                <img src={amrican} alt=""  className='w-[100%]'/>

                            </div>
                            <div className="img-div w-[50px] ">
                                <img src={ masterCard} alt=""  className='w-[100%]'/>

                            </div>
                            <div className="img-div w-[50px] ">
                                <img src={ paypal} alt=""  className='w-[100%]'/>

                            </div>
                </div>
                <div className='flex flex-col items-center md:flex-row  md:justify-center gap-3'>
                        <p className='capitalize md:text-xs'>get deliveries with freshCart </p>
                        <div className="img-div w-[50px]">
                            <img src={appleStore} alt="" />
                        </div>
                        <div className="img-div w-[50px]">
                            <img src={googleStore} alt="" />
                        </div>
                </div>

            </div>
            </div>
            
        </footer>
    </>
}
