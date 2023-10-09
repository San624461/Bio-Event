import icon from '../../assets/bio-new-logo-color.svg'
import './NavBar.css'
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import 'aos/dist/aos.css';
import Aos from "aos";
import toast from "react-hot-toast";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {


    const { user, logOut, createUser } = useContext(AuthContext)
    console.log(createUser)
    const handleSignOut = () => {
        logOut()
            .then(res => {
                toast.success('User Logged Out successfully')
            })
            .catch(error => {
                toast.error('Error Occured')
            })
    }

    const navLinks = <>

        <li className="mr-8"><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >Home</NavLink></li>
        <li className="mr-8"><NavLink to='/newsandinsights'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >News And Insights</NavLink></li>
        <li className="mr-8"><NavLink to='/member'

            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Member</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100 mt-6 mb-3" id="sidebar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src={icon} className="w-full normal-case text-xl ml-6 md:ml-6 lg:ml-0">

                </img>
            </div>

            <div className="navbar-center hidden lg:flex border-r-2 border-gray-500">
                <ul className=" menu-horizontal px-1 lg:ml-96 font-bold text-xl">
                    {navLinks}
                </ul>
                <div>

                </div>

            </div>






            <div className="ml-20 md:ml-12 lg:ml-12  md:ml-60 mr-2 md:mr-0 lg:mr-0">
                {user?.displayName && (
                    <p className="text-sm">{user.displayName}</p>
                )}

                {user?.email && (
                    <div className="avatar ml-3">
                        <div className="w-8 rounded-full">
                            <img src={user.photoURL} alt="User Avatar" />
                        </div>
                    </div>
                )}




                {
                    user ? <button
                        onClick={handleSignOut} className="btn bg-blue-400 ml-3 text-white pb-3 pt-3 w-[80%]text-white">
                        Sign Out
                    </button>
                        :


                        <button className="btn bg-blue-400 ml-3 pb-3 pt-3 w-[90%] text-white">
                            <Link to='/login'>Log In</Link>
                        </button>
                }


            </div>
        </div>
    );
};

export default NavBar;