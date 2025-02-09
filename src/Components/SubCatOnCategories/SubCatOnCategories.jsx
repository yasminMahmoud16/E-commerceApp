import axios from "axios";
import { useQuery } from "react-query";

export default function SubCatOnCategories({ btnNav, setBtnNav,categoryId }) {
    const getSubCatOnCategories = async () => {
    // if(!categoryId) return null
        // Fetch subcategories here
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`);
    // return response.data;
  };

  const { data } = useQuery({
    queryKey: ['subCatOnCategories',categoryId],
      queryFn: getSubCatOnCategories,
    // enabled:!!categoryId
  });

  const details = data?.data?.data;

  return (
    <>
      {btnNav && (
        <div
          id="drawer-navigation"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800"
          tabIndex={-1}
          aria-labelledby="drawer-navigation-label"
        >
          <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"></h5>
          <button
            type="button"
            onClick={() => setBtnNav(false)} // Close drawer
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {details?.map((det) => (
                <li key={det._id}>
                  <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span className="ms-3">{det.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
