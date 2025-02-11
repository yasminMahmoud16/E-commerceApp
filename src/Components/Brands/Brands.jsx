import axios from 'axios';
import  { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import BrandDetails from '../BrandDetails/BrandDetails';

export default function Brands() {
  const [selectedBrandId, setSelectedBrandId] = useState(null);

  const getBrands = async () => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  };

  const { data, isLoading } = useQuery({
    queryKey: 'brands',
    queryFn: getBrands,
  });

  const brands = data?.data.data;

  const handleBrandClick = (id) => {
    setSelectedBrandId(id);
  };

  const closeModal = () => {
    setSelectedBrandId(null);
  };

  return (
    <>
      <h1 className='text-center uppercase font-bold text-3xl mt-6 text-[#16C216]'>Our Brands</h1>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
          <div className="flex flex-col gap-24 text-center md:text-left md:mt-5">
            <h2 className="text-2xl uppercase text-[#238423] font-semibold">
              Here are a few brands Elevating Life with Purpose
            </h2>
            <p className="text-[#0d440d] capitalize">
              We believe in delivering quality, innovation, and style. Our brand is built on a passion for excellence, ensuring that every product we offer meets the highest standards.
            </p>
            <p className="text-[#0d440d] capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum, et placeat voluptatibus debitis vel aperiam aliquam iure nobis culpa.
            </p>
          </div>

          {isLoading ? (
            <div className='h-screen flex items-center justify-center'>
              <ThreeDots visible={true} height="80" width="80" color="#16c216" radius="9" ariaLabel="three-dots-loading" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {brands?.map((brand) => (
                <div key={brand._id} className="cursor-pointer" onClick={() => handleBrandClick(brand._id)}>
                  <img src={brand.image} className="w-full rounded hover:scale-105 transition-transform duration-300" alt={brand.name} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedBrandId && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <BrandDetails id={selectedBrandId} onClose={closeModal} />
        </div>
      )}
    </>
  );
}
