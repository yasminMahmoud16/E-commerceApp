import axios from 'axios';
import { useQuery } from 'react-query';

export default function useCategory() {
    // const {id} = useParams();
    const getCategories = async () => {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    };
    {/* use query  */}
    const { data: catData, isLoading:catLoading } = useQuery({
        queryKey: 'categories',
        queryFn: getCategories,
        refetchOnWindowFocus: false,
    });

    const categoriesData = catData?.data.data;
    console.log(categoriesData);
    // console.log(id);
    
// console.log(categoriesData?.[0]?._id);    


    return { categoriesData, catLoading };
}
