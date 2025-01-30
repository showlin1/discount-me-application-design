import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdHomeFilled, MdWindow } from "react-icons/md";
import { PiArrowsClockwiseLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";


const Dashboard = () => {
    return (
        <div className='pt-24 mb-16'>
            <div className="header-item h-[120px] bg-fixed mb-12">
                <div className="flex gap-2 hero-overlay bg-opacity-60 pt-10">
                    <Link to='/'>
                        <div className="text-white text-2xl ">
                            <MdHomeFilled></MdHomeFilled>
                        </div>
                    </Link>
                    <div className="text-xl text-white">
                        <a>{">"}</a>
                    </div>
                    <div className="text-base text-white">Categories</div>
                    <div className="text-xl text-white">
                        <a>{">"}</a>
                    </div>
                    <div className="text-base text-orange-600">Profile</div>
                </div>
            </div>
            <div className='flex'>
                <div className='w-64 min-h-screen rounded-xl shadow-xl p-4'>
                    <ul>
                        <li className='mt-4 p-2 rounded-xl hover:bg-slate-200'>
                            <div className='flex gap-4 text-xl font-bold'>
                                Navigation
                            </div>
                        </li>
                        <li className='mt-4 p-2 rounded-xl hover:bg-slate-200'>
                            <NavLink to='/dashboard/profile'>
                                <div className='flex gap-4'>
                                    <MdWindow className='text-2xl'></MdWindow>
                                    <span>Dashboard</span></div>
                            </NavLink>
                        </li>
                        <li className='mt-4 p-2 rounded-xl hover:bg-slate-200'>
                            <NavLink to='/dashboard/orderHistory'>
                                <div className='flex gap-4'>
                                    <PiArrowsClockwiseLight className='text-2xl'></PiArrowsClockwiseLight>
                                    <span>Order History</span></div>
                            </NavLink>
                        </li>
                        <li className='mt-4 p-2 rounded-xl hover:bg-slate-200'>
                            <NavLink to='/dashboard/wishlist'>
                                <div className='flex gap-4'>
                                    <FaRegHeart className='text-2xl'></FaRegHeart>
                                    <span>Wishlist</span></div>
                            </NavLink>
                        </li>
                        <li className='mt-4 p-2 rounded-xl hover:bg-slate-200'>
                            <NavLink to='/dashboard/cartShopping'>
                                <div className='flex gap-4'>
                                    <BsHandbag className='text-2xl'></BsHandbag>
                                    <span>Shopping Cart</span></div>
                            </NavLink>
                        </li>
                        <li className='mt-4 p-2 rounded-xl hover:bg-slate-200'>
                            <NavLink to='/dashboard/setting'>
                                <div className='flex gap-4'>
                                    <IoSettingsOutline className='text-2xl'></IoSettingsOutline>
                                    <span>Setting</span></div>
                            </NavLink>
                        </li>
                        <li className='mt-4 p-2 rounded-xl hover:bg-slate-200'>
                            <NavLink to='/dashboard/logout'>
                                <div className='flex gap-4'>
                                    <TbLogout className='text-2xl'></TbLogout>
                                    <span>Logout</span></div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;