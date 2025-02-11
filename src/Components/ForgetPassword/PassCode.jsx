import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import {  useRef, useState } from "react";

export default function ResetCode() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
      const [succMsg, setSuccMsg] = useState(null);

  
  const inputRef = useRef([]);




  const validationSchema = yup.object().shape({
    resetCode: yup.string().matches(/^\d{6}$/, "Code must be exactly 6 digits").required("Code is required"),
  });

  const resetPassCode = async ({ resetCode }) => {
    setLoading(true);
    setErrMsg(null);
    setSuccMsg(null)
    try {
      const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', { resetCode });
      console.log(res);
      setSuccMsg(res.data.status);
      setTimeout(() => {
        navigate('/reset-User');
      }, 1000);
      
    } catch (err) {
      console.log(err + ' from reset code');
      setErrMsg(err.response.data.message);
    }finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema,
    onSubmit: resetPassCode,
  });
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    formik.setFieldValue("resetCode", newCode.join("")); 
    
    if (value && index < code.length - 1) {
      inputRef.current[index + 1]?.focus();
    };

  };

  const handleBackInput = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRef.current[index - 1]?.focus();
    };
  };


  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container">
        
        <form className=" max-w-md  mx-auto shadow p-8 bg-[#f0f3f2] rounded-md gap-0 " onSubmit={formik.handleSubmit}>
          <h1 className="text-xl text-center">reset code </h1>
                    <p id="helper-text-explanation" className="my-6 text-center text-sm text-gray-500 dark:text-gray-400">Please introduce the 6 digit code we sent via email.</p>

          <div className="flex justify-center mb-2 space-x-2 rtl:space-x-reverse">
            
            {code.map((digit, index) => (
              
              <div key={index}>
                <label htmlFor="code-1" className="sr-only">First code</label>
                <input maxLength={1} ref={(el)=>{inputRef.current[index]=el}}  value={digit} onKeyDown={(e) => handleBackInput(index, e)} onChange={(e) => handleChange(index, e)} type="text" data-focus-input-init data-focus-input-next="code-2" id="code-1" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  />
              </div>
            ))}
              
            </div>
                {errMsg? <p className=' text-center text-md font-semibold capitalize text-red-900  rounded-lg  dark:bg-gray-800 dark:text-green-400'>{ errMsg}</p>:null }
                {succMsg ?
                  <div className="p-4 mb-4 text-md font-semibold capitalize text-green-600 rounded-lg  dark:bg-gray-800 dark:text-green-400" role="alert">
                  <span className="font-medium"></span> {succMsg}</div>
                : null}
          <button type="submit" className=" mt-4 flex items-center gap-2 justify-center  text-white bg-[#0aad0a] transition-all hover:bg-[#16c216] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0aad0a] dark:hover:bg-[#16c216] ">
              Verify

          
              {loading ? <div role="status">
                    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    </div> :null
                  }
          </button>

          
          </form>



      </div>
    </section>
  );
}
