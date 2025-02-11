import  { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup'

import flowImage from '../../assets/favicon.png'
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';


export default function Register() {
  const [msg, setMsg] = useState(null);
  const [succesMsg, setSuccesMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  // schema 

  const validationSchema = yup.object().shape({
    email: yup.string().required('Email Is Requried').email('Please Enter Valid Email'),
    password: yup.string().required('Password Is Requried').matches(/^[A-z0-9_]{6,30}$/, 'Please Enter Valid Password With (numbers / _ / characters)'),
    rePassword: yup.string().required('rePassword Is Requried').oneOf([yup.ref('password')], 'Password Dose not Match'),
    phone: yup.string().required('Phone Is Requried').matches(/^01[1205][0-9]{8}$/),
    name: yup.string().required('Name Is Requried').min(3, 'Not Less Than 3 Characters').max(20, 'Not More Than 20 Characters')
  });

  // for cleenCode
  async function regester(values) {
    // remove the msg if user enters new mail
    setMsg(null)
    setSuccesMsg(null)
    setLoading(true)
  
    try {
      
      const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
      console.log(res);
      setSuccesMsg(res.data.message)
      setToken(res.data.token);
      console.log(res.data.token);
      
      localStorage.setItem('token',res.data.token )
      setTimeout(() => {
        navigate('/login')
      },1000)
    } catch (err) {
      console.log(err.response.data.message);
      setMsg(err.response.data.message)
    } finally {
      setLoading(false)
    }
  };




  const formik = useFormik({

    initialValues: {
        name:'',
        email:'',
        password:'',
        rePassword:'',
        phone: '',
        
    },
    validationSchema,
    onSubmit: regester
  });
  return <>
    <section className=' min-h-screen flex items-center justify-center '>
      <div className="container">
            <form className="max-w-md mx-auto md:relative " onSubmit={formik.handleSubmit}>
                  <h1 className='capitalize mb-7'>register now</h1>
                  <div className="relative z-0 w-full mb-5 group">
                      <input value={formik.values.email}  onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required  autoComplete="new-password"/>
                      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                  </div>

                    {formik.errors.email && formik.touched.email? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                      <span className="font-medium"></span> {formik.errors.email}
                    </div>: null }
          

                  <div className="relative z-0 w-full mb-5 group">
                      <input value={formik.values.password}  onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required  autoComplete="new-password"/>
                      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                        {formik.errors.password && formik.touched.password? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                          <span className="font-medium"></span> {formik.errors.password}
                        </div>: null }
                  <div className="relative z-0 w-full mb-5 group">
                      <input value={formik.values.rePassword}  onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="rePassword" id="floating_rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required autoComplete="new-password" />
                      <label htmlFor="floating_rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>
                        {formik.errors.rePassword && formik.touched.rePassword? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                          <span className="font-medium"></span> {formik.errors.rePassword}
                        </div>: null }
                  
                    <div className="relative z-0 w-full mb-5 group">
                        <input value={formik.values.name}  onBlur={formik.handleBlur} onChange={formik.handleChange}  type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required autoComplete="new-password" />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>

                    {formik.errors.name && formik.touched.name? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium"></span> {formik.errors.name}
                      </div>: null }
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input  value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel"  name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0aad0a] focus:outline-none focus:ring-0 focus:border-[#0aad0a] peer" placeholder=" " required autoComplete="new-password" />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0aad0a] peer-focus:dark:text-[#0aad0a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                        {formik.errors.phone && formik.touched.phone? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium"></span> {formik.errors.phone}
                          </div>: null
                          }
                      </div>
            
            

          </div>
          <div className=''>

            <button type="submit" className="flex items-center justify-center gap-2 mb-5 text-white bg-[#0aad0a] hover:bg-[#16c216] focus:ring-4 focus:outline-none focus:ring-[#bbf4bb] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0aad0a] dark:hover:bg-[#16c216] dark:focus:ring-[#0aad0a]">
              Submit
              {loading ? 
                <div role="status">
                  <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              : null
              }
            </button>
            
            {msg ? <span className='p-4 mb-6 text-md font-semibold capitalize text-red-900  rounded-lg  dark:bg-gray-800 dark:text-green-400'>{ msg}</span>:null}
            {succesMsg ?<div className="p-4 mb-4 text-md font-semibold capitalize text-green-600 rounded-lg  dark:bg-gray-800 dark:text-green-400" role="alert">
              <span className="font-medium"></span> {succesMsg}</div>
              : null}
          </div>
              <img src={flowImage} alt="flowImage" className='w-[70px] md:absolute md:right-0  md:bottom-0 md:animate-bounceRotate ' />
            </form>
      </div>




    </section>
  </>
}


