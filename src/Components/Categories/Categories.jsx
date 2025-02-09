import useCategory from '../../Hooks/useCategory';
import SubCatOnCategories from '../SubCatOnCategories/SubCatOnCategories';
import { useState } from 'react';

export default function Categories() {
  const { categoriesData } = useCategory();
  const [btnNav, setBtnNav] = useState(false);
  const [categoryId,setCategoryId]= useState(null)
  return (
    <>
      <h1 className="text-center uppercase font-bold text-3xl mt-6 text-[#16C216]">
        Our Categories
      </h1>

      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-16">
          {/* <div className="text-center"> */}
      
          {categoriesData?.map((cat) => (
            // <Link  to={`/subcategories/${cat._id}`}>
            <div key={cat._id} onClick={() => {
                setBtnNav(true);
                setCategoryId(cat._id); 
              }} className="text-white font-medium rounded-lg text-sm px-5 py-2.5  flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                <img src={cat.image} alt={cat.name} className="h-auto max-w-full rounded-lg" />
                <h2 className="text-center text-xl font-semibold mt-3">{cat.name}</h2>
              </div>
            // </Link>
          ))};
  {/* </div> */}
        </div>
        <SubCatOnCategories setBtnNav={setBtnNav} btnNav={btnNav} categoryId={ categoryId} />
      </div>
      
    </>
  );
}
