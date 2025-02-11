import axios from "axios";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";

export default function SubCatOnCategories({ categoryId }) {

  
  const [clicked, setClicked] = useState(false); 

  const getSubCatOnCategories = async () => {
    try {
      const res = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`
      );
      return res.data; 
    } catch (err) {
      console.log(err + " error subcategory ");
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["subCatOnCategories", categoryId],
    queryFn: getSubCatOnCategories,
    enabled: !!categoryId, 
  });

  const details = data?.data ?? []; 

  useEffect(() => {
    if (categoryId) {
      setClicked(true); 
    }
  }, []);



  return (
    <>
      {isLoading ? <p className="text-center text-green-950">Loading subcategories...</p> : <>
          {details.length > 0 ? (
        <div className="flex justify-center items-center flex-wrap gap-4 mb-5">
          {details.map((det) => (
            <div key={det._id} className="p-4 rounded-md border-4 border-green-950">
              {det.name}
            </div>
          ))}
        </div>
      ) : (
        clicked && ( 
          <h1 className="text-center mb-5 text-green-950 uppercase font-semibold">
            There is no subcategory here
          </h1>
        )
      )}
      </>}
    
    </>
  );
}
