import React, { useContext } from 'react';
import userDefoultImg from '../../../../assets/assets/user.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelSignout = () => {
        logOut()
            .then()
            .catch()
    }


    const items = (
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/career'}>Career</NavLink></li>
            <li><NavLink to={'/login'}>Login</NavLink></li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {items}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <img className='w-[50px] rounded-full' src={userDefoultImg} alt="" />
                    {
                        user ?
                            <button className='btn bg-gray-700 text-white' onClick={handelSignout}>Sign Out</button>

                            :
                            <Link to={'/login'}>
                                <button className='btn bg-gray-700 text-white'>Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;