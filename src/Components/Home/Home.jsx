import  { useContext } from 'react'
import ProductsCard from '../ProductsCard/ProductsCard'
import { Oval } from 'react-loader-spinner'
import { Swiper, SwiperSlide } from 'swiper/react';

import slider1 from '../../assets/clothe1.jpg'
import slider2 from '../../assets/clothe2.jpg'
import slider3 from '../../assets/clothe3.jpg'

import blog1 from '../../assets/laptop-1483974_640.jpg'
import blog2 from '../../assets/headphones.jpg'
import CategorySlide from '../CategorySlide/CategorySlide';
import { ProductContext } from '../Context/ProductContext';

export default function Home() {
    const { allProductsData,isLoading}=useContext(ProductContext)



    return <>
        <section className='min-h-screen'>

            <div className='grid grid-cols-1 md:grid-cols-6 ' >
                <div className='col-span-4'>
                    <Swiper loop={true} style={{ height: '100%' }}>
                        <SwiperSlide>
                            <img src={ slider3} className='w-full h-full' alt="slider1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ slider2} className='w-full h-full' alt="slider2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ slider1} className='w-full h-full' alt="slider2" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='col-span-1 md:col-span-2 flex flex-col '>
                    <img src={blog1} alt="blog1" className='h-1/2' />
                    <img src={blog2} alt="blog2" className='h-1/2' />
                </div>
            </div>

            <div className='mb-9' >
                <CategorySlide />
            </div>


            {isLoading ? <div className=' min-h-screen  flex items-center justify-center'>
                <Oval
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
            </div>
                :<div className="container">
                            <h1 className='uppercase text-[#16C216]  font-bold text-center text-4xl my-6 '>shop all</h1>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">


                        {allProductsData?.map((pro) => (
                            <ProductsCard products={pro} key={pro._id} />
                        ))}
                
                </div>
            </div>}
        </section>
        
    </>
}
