
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className='font-nunito w-[90%] mx-auto'>
            <NavBar></NavBar>
         
            <Outlet></Outlet>
            <Footer></Footer>
            <div><Toaster/></div>
        </div>
    );
};

export default Root;