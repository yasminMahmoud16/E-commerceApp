import axios from 'axios';
import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { useQuery } from 'react-query';

export default function Brands() {
  const getBrands = async () => { 
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }

  const { data,isLoading } = useQuery({
    queryKey: 'brands',
    queryFn: getBrands,
  });
  const brands = data?.data.data;
  console.log(brands);
  
  return <>

          <h1 className='text-center uppercase font-bold text-3xl mt-6 text-[#16C216]'>our brands</h1>
<div className="container">
  {/* Grid Layout: 1 Column on Small, 2 Columns on Medium Screens */}
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2  mt-8">
    
    {/* Text Section */}
    <div className="flex flex-col gap-24 text-center md:text-left md:mt-5">
      <h2 className="text-2xl uppercase text-[#238423] font-semibold">
        Here are a few brands Elevating Life with Purpose
      </h2>
      <p className="text-[#0d440d] capitalize">
        We believe in delivering quality, innovation, and style. Our brand is built on a passion for excellence, ensuring that every product we offer meets the highest standards. We are dedicated to bringing you the best.
      </p>
      <p className="text-[#0d440d] capitalize">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo illum, et placeat voluptatibus debitis vel aperiam aliquam iure nobis culpa.
      </p>
    </div>

        {/* Brands Grid */}
        {isLoading ?
          <div className='  h-screen flex items-center justify-center'>
                      <ThreeDots
                              visible={true}
                              height="80"
                              width="80"
                              color="#16c216"
                              radius="9"
                              ariaLabel="three-dots-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                              />
                  </div>:    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {brands?.map((brand) => (
        <div key={brand._id}>
          <img src={brand.image} className="w-full" alt={brand.name} />
        </div>
      ))}
    </div>}


  </div>
</div>




    {/* </div> */}

  </>
}
