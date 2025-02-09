

import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
    const [succMsg, setSuccMsg] = useState(null);
  

  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    email: yup.string().required('Email Is Requried').email('Please Enter Valid Email'),
  });


  
  const resetPass = async ({ email }) => {
    setLoading(true);
        setErrMsg(null);
        setSuccMsg(null);


    try {
      
      const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', { email })
      console.log(res);
      setSuccMsg(res.data.message);
      setTimeout(() => {
        navigate('/password-code')
      }, 1000);
    } catch (err) {
      console.log(err, + 'error from forgeeet ');
      setErrMsg(err.response.data.message);
      
    } finally {
      setLoading(false);
    }
    
  };



  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema,
    onSubmit: resetPass
  });



  return <>
    <section className='min-h-screen my-20'>
      <div className="container">

                <form className="relative w-[75%] mx-auto shadow p-8 bg-[#f0f3f2] rounded-md " onSubmit={formik.handleSubmit}>
          <h1 className='capitalize mb-3 text-center text-xl'>Forget your password   </h1>
          <p className='text-sm my-4 text-center'>please enter the email addressyou would like your password reset information sent to</p>
          <div className="mb-5">
            <label htmlFor="email" className=" capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"> email</label>
            <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0aad0a] focus:border-[#0aad0a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
          </div>
          {formik.errors.email && formik.touched.email ?
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg  dark:bg-gray-800 " role="alert">
              <span className="font-medium"></span> {formik.errors.email}
            </div>
            :null
          }


          <div className=''>
            {errMsg ? <p className=' mb-3 text-sm font-semibold capitalize text-red-900  rounded-lg  dark:bg-gray-800 dark:text-green-400'>{errMsg}</p> : null}
            {succMsg ?
              <div className="p-4 mb-4 text-md font-semibold capitalize text-green-600 rounded-lg  dark:bg-gray-800 dark:text-green-400" role="alert">
                <span className="font-medium"></span> {succMsg}</div>
              : null}

            <button type="submit" className="flex items-center justify-center gap-3 text-white bg-[#0aad0a] transition-all hover:bg-[#16c216] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0aad0a] dark:hover:bg-[#16c216] ">
              Verify

              {loading ? <div role="status">
                    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
              </div> :null
                  }
            </button>



          </div>


        </form>
            {/* <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            
            {formik.errors.email && formik.touched.email?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium"></span> {formik.errors.email}
            </div>
            :null}
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit

            {loading ? <div role="status">
                    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
              </div> :null
                  }
          </button>

            </form> */}

      </div>
    </section>
  </>
}






// import axios from 'axios'
// import { useFormik } from 'formik';
// import {  useQuery } from 'react-query';
// import { useNavigate } from 'react-router-dom';
// import * as yup from 'yup'

// export default function ForgetPassword() {

//     const navigate = useNavigate();

  
//   const validationSchema = yup.object().shape({
//     email: yup.string().required('Email Is Requried').email('Please Enter Valid Email'),
//   });

// const resetPass = async ( values ) => {
//   try {
//       const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', { values });
//     setTimeout(() => {
//         navigate('/password-code')
//       },1000)
//     console.log('Success:', res);
//   } catch (err) {
//     console.error('Error:', err);
//   } 
//   };
  


//   const { isLoading } = useQuery({
//     queryKey: 'forgetPassword',
//     queryFn: resetPass
//   });


  
//   const formik = useFormik({
//     initialValues: {
//     email: ''
//     },
//     validationSchema,
//     onSubmit:resetPass
//   })

    
//     return <>
//     <section className='min-h-screen flex items-center justify-center'>
//       <div className="container">

        
        

//         <form className="relative w-[75%] mx-auto shadow p-8 bg-[#f0f3f2] rounded-md " onSubmit={formik.handleSubmit}>
//                     <h1 className='capitalize mb-3 text-center text-xl'>forget password  </h1>
//                     <p>
//                         please enter the email address you would like your password rrest information send to 
//                     </p>
//           <div className="mb-5">
//             <label htmlFor="email" className=" capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"> email</label>
//             <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0aad0a] focus:border-[#0aad0a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
                        
              
              
//               {formik.errors.email && formik.touched.email ?
//             <div className="p-4 mb-4 text-sm text-red-800 rounded-lg  dark:bg-gray-800 dark:text-red-400" role="alert">
//               <span className="font-medium"></span> {formik.errors.email}
//             </div>
//             :null
//           }
//           </div>
          





            
//             <button type="submit" className="flex items-center justify-center gap-3 text-white bg-[#0aad0a] transition-all hover:bg-[#16c216] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0aad0a] dark:hover:bg-[#16c216] ">
//               {isLoading?<h1>loading....</h1>:null}
//               Submit

//             </button>

             
//         </form>
//       </div>



//     </section>
//     </>
// }
