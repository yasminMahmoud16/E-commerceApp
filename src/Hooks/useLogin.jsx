import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import axios from 'axios';
import { useFormik } from 'formik';
import { AuthContext } from '../Components/Context/AuthContext';

export default function useLogin() {
    const [errMsg, setErrMsg] = useState(null);
    const [succMsg, setSuccMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);





    const validationSchema = yup.object().shape({
        email: yup.string().required('Email Is Requried').email('Please Enter Valid Email'),
        password: yup.string().required('Password Is Requried').matches(/^[A-z0-9_]{6,30}$/, 'Please Enter Valid Password With (numbers / _ / characters)')
    });


    async function login(values) {
        setSuccMsg(null);
        setErrMsg(null);
        setLoading(true);


        try {
            const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
            console.log(res);
            setSuccMsg(res.data.message)
            setToken(res.data.token);
            console.log(res.data.token);





            localStorage.setItem('token', res.data.token)
            setTimeout(() => {
                navigate('/')
            }, 1000);
        } catch (err) {
            console.log(err.response.data.message);
            setErrMsg(err.response.data.message)

        } finally {
            setLoading(false)
        }
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: login
    });
    return { formik, errMsg, succMsg, loading }
}
