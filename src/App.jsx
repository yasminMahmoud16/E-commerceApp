import {  createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import RouterLayout from './RouterLayout/RouterLayout'
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Error from './Components/Error/Error';
import AuthContextProvider from './Components/Context/AuthContext';
import Guard from './Components/Guard/Guard';
import AuthGuard from './Components/AuthGuard/AuthGuard';
import { QueryClient ,QueryClientProvider } from 'react-query';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CartContextProvider from './Components/Context/CartContext';
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';

import WishContextProvider from './Components/Context/WishContext';
import WishList from './Components/WishList/WishList';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import PassCode from './Components/ForgetPassword/PassCode';
import ResetUser from './Components/ForgetPassword/ResetUser';
import Payment from './Components/Payment/Payment';
import Cart from './Components/Cart/Cart';
import AllOrders from './Components/AllOrders/AllOrders';
import Products from './Components/Products/Products';
import ProductContextProvider from './Components/Context/ProductContext';


// import SocialMedia from './Components/SocialMedia/SocialMedia';
// import BrandDetails from './Components/BrandDetails/BrandDetails';

const queryClint = new QueryClient();

const route = createHashRouter([
  {
    path: '', element: <RouterLayout/>, children: [
      { index: true, element:<Guard><Home /></Guard>   },
      {path:'cart', element: <Guard><Cart/></Guard> },
      {path:'products', element: <Guard><Products/></Guard> },
      {path:'details/:id', element: <Guard><ProductDetails/></Guard> },
      {path:'categories', element: <Guard><Categories/></Guard> },
      {path:'allorders', element: <Guard><AllOrders/></Guard> },
      { path: 'brands', element: <Guard><Brands /></Guard>   },
      { path: 'wish-list', element: <Guard><WishList /></Guard>   },
      { path: 'payment', element: <Guard><Payment /></Guard>   },
      { path: 'login', element:<AuthGuard><Login/></AuthGuard>  },
      { path: 'forget-password', element:<AuthGuard><ForgetPassword/></AuthGuard>  },
      { path: 'password-code', element:<AuthGuard><PassCode/></AuthGuard>  },
      { path: 'reset-User', element:<AuthGuard><ResetUser/></AuthGuard>  },
      { path: 'register', element: <AuthGuard><Register/></AuthGuard>  },
      {path:'*' , element: <Error/>}
      
  ] }
])
export default function App() {
  return <>
    {/* <RouterProvider router={routes}/> */}
 <AuthContextProvider>
      <QueryClientProvider client={queryClint}>

          <CartContextProvider>
            <WishContextProvider>
        <ProductContextProvider>
              <RouterProvider router={route} />
              <Toaster position="top-right" />
        </ProductContextProvider>
            </WishContextProvider>
          </CartContextProvider>
  </QueryClientProvider>
</AuthContextProvider>

  </>
}
