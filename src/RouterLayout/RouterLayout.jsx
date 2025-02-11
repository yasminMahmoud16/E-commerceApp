import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import SocialMedia from '../Components/SocialMedia/SocialMedia'

export default function Layout() {
    return <>
        <Navbar />
        <SocialMedia/>
        <Outlet />
        <Footer/>
    </>
}
