// import axios from 'axios'
// import React from 'react'
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';

// export default function useBrand() {
//     // const getSpacidicBrand = async(id) => {
//     //     return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
//     // }

//     // // use Query

//     // const { data:brand } = useQuery({
//     //     queryKey: 'spacficBrand',
//     //     queryFn:getSpacidicBrand
//     // });
//     // const spacificBrans = brand?.data.data;
//     // console.log(spacificBrans);
//     const {id} = useParams();
//   console.log(id);  



//   const getDetailds = async () => { 
//     return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
    
//   }

//   const { data ,isLoading } = useQuery({
//     queryKey: ['spacficBrand', id],
//     queryFn: getDetailds,
//     // cacheTime: 0
//   });

//   const details = data?.data.data;
//   console.log(details);
    
//     return {details}
// }
