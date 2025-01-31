import React from 'react'
import useCategory from '../../Hooks/useCategory';

export default function Categories() {
  const { categoriesData}=useCategory();
  return <>
              <h1 className='text-center uppercase font-bold text-3xl mt-6 text-[#16C216]'>our Categories</h1>


    <div className="container">

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20' >

          {categoriesData?.map((cat) =>
            <div key={cat._id} className='  flex flex-col items-center justify-center '>
              <img src={cat.image} alt="" className='w-full h-[250px]' />
              <h2 className='text-center text-xl font-semibold mt-3'>{cat.name}</h2>
          </div>
          )}

        </div>
    </div>

  </>
}
