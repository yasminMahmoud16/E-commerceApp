import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import RouterLayout from './RouterLayout/RouterLayout'
import Carts from './Components/Carts/Carts';
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

const queryClint = new QueryClient();

const route = createHashRouter([
  {
    path: '', element: <RouterLayout/>, children: [
      { index: true, element:<Guard><Home /></Guard>   },
      {path:'carts', element: <Guard><Carts/></Guard> },
      {path:'details/:id', element: <Guard><ProductDetails/></Guard> },
      {path:'categories', element: <Guard><Categories/></Guard> },
      { path: 'brands', element: <Guard><Brands /></Guard>   },
      { path: 'login', element:<AuthGuard><Login/></AuthGuard>  },
      { path: 'register', element: <AuthGuard><Register/></AuthGuard>  },
      {path:'*' , element: <Error/>}
      
  ] }
])
export default function App() {
  return <>
    {/* <RouterProvider router={routes}/> */}
    <AuthContextProvider>
      <QueryClientProvider client={queryClint}>
        <RouterProvider router={ route} />

      </QueryClientProvider>
        
   

    </AuthContextProvider>
  </>
}
