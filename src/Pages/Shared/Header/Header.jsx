import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Header = ({ props }) => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(err => console.log(`Error is: ${err}`))
    }

    const menuItems = <React.Fragment>
        <li>
            <Link to='/' className='rounded-xl font-semibold hover:text-black'>Home</Link>

            <Link to='/about' className='rounded-xl font-semibold hover:text-black'>About Us</Link>
            <Link to='/shop' className='rounded-xl font-semibold hover:text-black'>Shop Now</Link>

            {
                user?.uid
                    ?
                    <>
                        <Link className=" text-gray-900 font-semibold rounded-xl" to='/dashboard'>Dashboard</Link>

                        <Link className=" text-gray-900 font-semibold rounded-xl" to='/blog'>Blog</Link>

                        <Link onClick={handleLogOut} className="btn bg-red-700 text-gray-50 rounded-xl hover:bg-amber-900 border border-gray-50">Log Out</Link>
                    </>
                    : <></>
            }
        </li>
    </React.Fragment>

    return (
        <div className="navbar bg-base-100">

            <div className="navbar-start">

                <div className="dropdown">

                    <label tabIndex={0} className="btn btn-ghost lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                    </label>

                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>

                </div>

                <Link className="btn btn-ghost normal-case text-2xl hover:text-black">amaJON</Link>

            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>

            </div>

            <div className="navbar-end gap-2 mx-4">
                {
                    user?.uid ?
                        <>
                            <span className='text-sm font-semibold'>{user?.displayName}</span>
                        </>
                        :
                        <>
                            <Link className="btn bg-gray-300 text-black rounded-xl border border-gray-50
                                hover:border-gray-800
                                hover:text-black
                                hover:bg-gray-300" to='/signin'>Sign In</Link>
                        </>
                }
            </div>

            <div className='mr-2'>
                {
                    user?.photoURL
                        ?
                        <img style={{ height: '30px' }} className="rounded-lg w-12" src={user?.photoURL} title={`${user?.displayName}`} alt="No Img" />
                        :
                        user?.uid ? <FaUserAlt></FaUserAlt> : <></>
                }
            </div>
        </div>
    );
};

export default Header;