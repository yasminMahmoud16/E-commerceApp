import axios from "axios"
import { useFormik } from "formik";
import { useContext, useState } from "react";
// import * as yup from 'yup';
import { CartContext } from "../Components/Context/CartContext";
// import toast from "react-hot-toast";



export default function useCash() {
    
    const { cartId } = useContext(CartContext);
    const [paymentWay, setPaymentWay] = useState();
    // const validationSchema = yup.object().shape({
    //     'shippingAddress.details': yup.string().required('Your Address Details Is Required ').min(3, 'Not Less Than 3 Characters').max(100, 'Not More Than 100 Characters'),
    //     'shippingAddress.phone': yup.string().required('Phone Is Requried').matches(/^01[1205][0-9]{8}$/),
    //     'shippingAddress.city':yup.string().required('City Is Required')
    // })



    const handleSubmit = (values) => {
        
        if (paymentWay == 'cash') {
            cashMethoud();
        } else if (paymentWay == 'visa') {
            visaMethoud()
        }


        console.log(values);
    };


    const cashMethoud = async(values) => {
        console.log('cashMethoud');
        try {
            
            const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, values, {
                headers: {
                    token:localStorage.getItem('token')
                }
        
            });
            console.log(res);
        //     if (res.data.status === 'success') {
        //     toast.success('Order placed successfully!');
        // } 
            
        } catch (err) {
            console.log(err);
            
        }
    }

    // const baseUrl = `${window.location.origin}/E-commerceApp`;

    const visaMethoud = async (values) => {
        console.log('visaMethoud');
        console.log(window.location.origin);
        
        try {
            
            const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173/E-commerceApp`, values, {
                headers: {
                    token: localStorage.getItem('token')
                }
            });
            console.log(res);
            window.open(res.data.session.url,'_blank')
        } catch (err) {
            console.log(err +'err from visa methoud');
            
        }
        
    }


    const formik = useFormik({
        initialValues: {
            shippingAddress:{
                details: "",
                phone: "",
                city: ""
            }
        },
        
        onSubmit:handleSubmit
    })
return {handleSubmit,formik,paymentWay, setPaymentWay}
}
