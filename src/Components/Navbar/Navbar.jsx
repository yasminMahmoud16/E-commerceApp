import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/freshcart-logo.svg';
import { AuthContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CartContext';
import { Badge } from '@mui/material';
import { WishContext } from '../Context/WishContext';

export default function Navbar() {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const { numOfCartItems } = useContext(CartContext);
  const { userwishItems } = useContext(WishContext);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow md:flex md:items-center md:justify-around">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </div>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:justify-start md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {token ? (
              <>
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-[#16C216] rounded md:bg-transparent md:text-[#16C216] md:p-0 dark:text-white md:dark:text-[#16C216]' : 'block py-2 px-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-500'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="products" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-[#16C216] rounded md:bg-transparent md:text-[#16C216] md:p-0 dark:text-white md:dark:text-[#16C216]' : 'block py-2 px-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-500'}>Products</NavLink>
                </li>
                <li>
                  <NavLink to="categories" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-[#16C216] rounded md:bg-transparent md:text-[#16C216] md:p-0 dark:text-white md:dark:text-[#16C216]' : 'block py-2 px-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-500'}>Categories</NavLink>
                </li>
                <li>
                  <NavLink to="brands" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-[#16C216] rounded md:bg-transparent md:text-[#16C216] md:p-0 dark:text-white md:dark:text-[#16C216]' : 'block py-2 px-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-500'}>Brands</NavLink>
                </li>
                <li className="relative">
                  <NavLink to="cart" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-[#16C216] rounded md:bg-transparent md:text-[#16C216] md:p-0 dark:text-white md:dark:text-[#16C216]' : 'block py-2 px-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-500'}>
                    <Badge color="error" badgeContent={numOfCartItems}>
                      <i className="fa-solid fa-cart-shopping text-[#16C216] text-lg"></i>
                    </Badge>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="wish-list">
                    <Badge color="secondary" badgeContent={userwishItems.length || 0}>
                      <i className="pl-3 mb-3 md:pl-0 md:mb-0 fa-solid fa-heart text-xl text-[#16c216] cursor-pointer transition-all hover:text-red-500"></i>
                    </Badge>
                  </NavLink>
                </li>
              </>
            ) : null}

            <div className="state flex flex-col md:flex-row md:space-x-4">
              {token ? (
                <button className="border-2 border-[#16C216] py-1 px-5 rounded-md text-[#16c216] hover:bg-[#288828] hover:text-white hover:border-[#288828] transition duration-300 ease-in-out" onClick={logout}>
                  Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              ) : (
                <>
                  <Link to="login" className="transition-all hover:text-[#16C216]">Login</Link>
                  <Link to="register" className="transition-all hover:text-[#16C216]">Register</Link>
                </>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
