// import { useFormik } from "formik";
import useCash from "../../Hooks/useCash"
// import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
// import * as yup from 'yup';

export default function Payment() {
    const { formik, setPaymentWay } = useCash()

    


    return <>
        <section className="min-h-screen flex flex-col items-center justify-center">
            <div className="container">

                            <form className="max-w-md mx-auto md:relative " onSubmit={formik.handleSubmit}>
                                <h1 className='capitalize mb-7'>cash payment</h1>

                                    <div className="relative z-0 w-full mb-5 group">
                                    <input  onChange={(e) => formik.setFieldValue('shippingAddress.details', e.target.value)}
                                        type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required autoComplete="new-password" />
                                        <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">address details</label>
                                    </div>
                
 
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input    onChange={(e) => formik.setFieldValue('shippingAddress.phone', e.target.value)}
                                                type="tel"  name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required  />
                                                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                                {/* {formik.errors.phone && formik.touched.phone? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                <span className="font-medium"></span> {formik.errors.phone}
                                                </div>: null
                                                } */}
                                        </div>
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input    onChange={(e) => formik.setFieldValue('shippingAddress.city', e.target.value)}
                                                type="text"  name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer"  />
                                                <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city</label>
                                                {/* {formik.errors.phone && formik.touched.phone? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                <span className="font-medium"></span> {formik.errors.phone}
                                                </div>: null
                                                } */}
                                        </div>
                            
                            
                
                            </div>
                            <div className=' flex gap-4'>
                
                            <button onClick={()=>setPaymentWay('cash')}  className="flex items-center justify-center gap-2 mb-5 text-white bg-[#0aad0a] hover:bg-[#16c216] focus:ring-4 focus:outline-none focus:ring-[#bbf4bb] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0aad0a] dark:hover:bg-[#16c216] dark:focus:ring-[#0aad0a]">
                                cash payment 

                            </button>
                            <button onClick={()=>setPaymentWay('visa')}  className="flex items-center justify-center gap-2 mb-5 text-white bg-[#0aad0a] hover:bg-[#16c216] focus:ring-4 focus:outline-none focus:ring-[#bbf4bb] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0aad0a] dark:hover:bg-[#16c216] dark:focus:ring-[#0aad0a]">
                                visa payment 

                            </button>
                            

                                </div>
                        </form>
            </div>
        </section>
    </>
}


//     //     const cashMethod = async (values) => {
    //     // const res = await axios.post('https://ecommerce.routemisr.com/api/v1/orders/65cb72e38462ab02c71ee050', values, {
    //     //     headers: {
    //     //         token:localStorage.getItem('token')
    //     //     }
            
    //     // });
    //     console.log(values);
    // }
    // // const validationSchema = yup.object().shape({
    // //     'shippingAddress.details': yup.string().required('Your Address Details Is Required ').min(3, 'Not Less Than 3 Characters').max(100, 'Not More Than 100 Characters'),
    // //     'shippingAddress.phone': yup.string().required('Phone Is Requried').matches(/^01[1205][0-9]{8}$/),
    // //     'shippingAddress.city':yup.string().required('City Is Required')
    // // });

    // const formik = useFormik({
    //     initialValues: {
    //         shippingAddress:{
    //             details: "",
    //             phone: "",
    //             city: ""
    //         }
    //     },
        
    //     onSubmit:cashMethod
// })
                                    {/* {loading ? 
                                    <div role="status">
                                    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                    </div>
                                : null
                                } */}


                                        {/* {loading ? 
                                    <div role="status">
                                    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                    </div>
                                : null
                                } */}
                            {/* {msg ? <span className='p-4 mb-6 text-md font-semibold capitalize text-red-900  rounded-lg  dark:bg-gray-800 dark:text-green-400'>{ msg}</span>:null}
                            {succesMsg ?<div className="p-4 mb-4 text-md font-semibold capitalize text-green-600 rounded-lg  dark:bg-gray-800 dark:text-green-400" role="alert">
                                <span className="font-medium"></span> {succesMsg}</div>
                              : null} */}