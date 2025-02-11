
import { Link } from 'react-router-dom';
import flowImage from '../../assets/favicon.png'
import useLogin from '../../Hooks/useLogin';



export default function Login() {

  const { formik, errMsg, succMsg, loading  } = useLogin();
  
  return <>
    <section className='min-h-screen flex items-center justify-center'>
      <div className="container">

        
        
        
        <form className="relative w-[75%] mx-auto shadow p-8 bg-[#f0f3f2] rounded-md " onSubmit={formik.handleSubmit}>
                  <h1 className='capitalize mb-3 text-center text-xl'>login </h1>
          <div className="mb-2">
            <label htmlFor="email" className=" capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"> email</label>
            <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0aad0a] focus:border-[#0aad0a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#0aad0a] dark:focus:border-[#0aad0a]" placeholder="email@gmail.com" required />
          </div>
          {formik.errors.email && formik.touched.email ?
            <div className="p-4  text-sm text-red-800 font-semibold rounded-lg  dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium"></span> {formik.errors.email}
            </div>
            :null
          }
          <div className="mb-2">
            <label htmlFor="password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input  value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0aad0a] focus:border-[#0aad0a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#0aad0a] dark:focus:border-[#0aad0a]" required />
          </div>

          {formik.errors.password && formik.touched.password ?
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg font-semibold  dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium"></span> {formik.errors.password}
            </div>
            :null
          }

          <div className=''>

            <button type="submit" className="flex items-center justify-center gap-3 text-white bg-[#0aad0a] transition-all hover:bg-[#16c216] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0aad0a] dark:hover:bg-[#16c216] ">
              Submit

              {loading ? <div role="status">
                    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
              </div> :null
                  }
            </button>
            {errMsg? <span className='p-4 mb-6 text-md font-semibold capitalize text-red-900  rounded-lg  dark:bg-gray-800 dark:text-green-400'>{ errMsg}</span>:null }
            {succMsg ?
              <div className=" p-4 text-md font-semibold capitalize text-green-600 rounded-lg  dark:bg-gray-800 dark:text-green-400" role="alert">
                <span className="font-medium"></span> {succMsg}</div>
              : null}

          </div>
            <div className='flex gap-3  items-center mt-3'>

              <span className='capitalize text-gray-900 text-sm'>create an account <Link to={'/register'} className='capitalize underline text-[#16c216] transition-all hover:text-[#207020]'>signup</Link></span>
              <Link to={'/forget-password'} className='capitalize underline text-[#16c216] transition-all hover:text-[#207020]'>Forget Password ?</Link>
            </div>

          <div className="imgeFlow absolute bottom-8 right-0  -rotate-[20deg] ">
                  <img src={flowImage} alt="flowImage" className='w-[200px] opacity-15 ' />
                </div>
        </form>
      </div>



    </section>
  </>
}
