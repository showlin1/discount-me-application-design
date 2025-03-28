import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-back bg-white border-b-2 fixed z-10 left-0 right-0">
            <div className="navbar container  mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a>All Category</a>
                                <ul className="">
                                    <Link to='/'><li><a>Home</a></li></Link>
                                    <Link to='/signIn'><li><a>Sign In</a></li></Link>
                                    <Link to='/allCart'><li><a>All Cafe</a></li></Link>
                                    <Link to='/shoppingPage'><li><a>Shopping Page</a></li></Link>
                                    <Link to='/shopCart'><li><a>Shop Cart</a></li></Link>
                                    <Link to='/termsUse'><li><a>Terms of Use</a></li></Link>
                                    <Link to='/privacyPolicy'><li><a>Privacy Policy</a></li></Link>
                                    <Link to='/shareReview'><li><a>Share Review</a></li></Link>
                                    <Link to='/dashboard/profile'><li><a>Dashboard</a></li></Link>
                                </ul>
                            </li>
                            <Link to='/aboutUs'><li><a>About Us</a></li></Link>
                            <Link to='/couponCard'><li className='text-xl'><a>Coupon</a></li></Link>
                            <li><a>Support</a></li>
                        </ul>
                    </div>
                    <div className='grid grid-cols-2 justify-between'>
                        <Link to='/'>
                            <img width='160' height='130' src="https://i.ibb.co.com/rfZfZzn/logo.png" alt="" />
                        </Link>
                        <div className="form-control relative hidden lg:flex">
                            <input type="text" placeholder="Search" className="input input-bordered rounded-full px-10 w-24 md:w-auto" />
                            <span className="absolute mt-4 left-4"><FaSearch></FaSearch></span>
                            <span className='absolute p-3 right-0 rounded-r-full bg-[#FF7D29] '>Search</span>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-xl'>
                            <details>
                                <summary>All Category</summary>
                                <ul className="p-2 w-52">
                                    <Link to='/'><li><a>Home</a></li></Link>
                                    <Link to='/signIn'><li><a>Sign In</a></li></Link>
                                    <Link to='/allCart'><li><a>All Cafe</a></li></Link>
                                    <Link to='/shoppingPage'><li><a>Shopping Page</a></li></Link>
                                    <Link to='/shopCart'><li><a>Shop Cart</a></li></Link>
                                    <Link to='/termsUse'><li><a>Terms of Use</a></li></Link>
                                    <Link to='/privacyPolicy'><li><a>Privacy Policy</a></li></Link>
                                    <Link to='/shareReview'><li><a>Share Review</a></li></Link>
                                    <Link to='/dashboard/profile'><li><a>Dashboard</a></li></Link>
                                </ul>
                            </details>
                        </li>
                        <Link to='/aboutUs' ><li className='text-xl'><a>About Us</a></li></Link>
                        <Link to='/couponCard'><li className='text-xl'><a>Coupon</a></li></Link>
                        <li className='text-xl'><a>Support</a></li>
                    </ul>
                </div>
                <div className="navbar-end text-2xl gap-10">
                    <FaRegHeart></FaRegHeart>
                    <Link to='/shopCart' className='text-orange-500'><FiShoppingCart></FiShoppingCart></Link>
                    <Link to='/dashboard/profile'><CiUser></CiUser></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;