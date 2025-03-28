import React from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { RxCrossCircled } from "react-icons/rx";

const ShopCart = () => {
    return (
        <div className='pt-24'>
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
                    <div className="text-base text-orange-600">Shop Cart</div>
                </div>
            </div>
            <h1 className='text-3xl font-bold text-start mb-8'>My Shopping Cart</h1>
            <div className='w-full mb-16 flex gap-2'>
                <div className='w-2/3 border rounded-xl shadow-xl p-4'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>SUBTOTAL</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="rounded-xl h-16 w-16">
                                                    <img
                                                        src="https://i.ibb.co.com/ZzL39cLB/freez.png"
                                                        alt="Freez" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-center ">Freezer</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $ 14.00
                                    </td>
                                    <td className='relative'>
                                        <input type="text" placeholder='5' className="input input-bordered text-center rounded-full" />
                                        <span className="absolute  left-6 text-xl p-2 rounded-full bg-base-300">-</span>
                                        <span className='absolute p-2 right-20 text-xl rounded-full bg-base-300 '>+</span>
                                    </td>
                                    <td>
                                        $ 70.00
                                    </td>
                                    <td>
                                        <RxCrossCircled className='text-2xl'></RxCrossCircled>
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="rounded-xl h-16 w-16">
                                                    <img
                                                        src="https://i.ibb.co.com/WpYm7ws1/tv.png"
                                                        alt="TV" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-center ">TV</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $ 14.00
                                    </td>
                                    <td className='relative'>
                                        <input type="text" placeholder='5' className="input input-bordered text-center rounded-full" />
                                        <span className="absolute  left-6 text-xl p-2 rounded-full bg-base-300">-</span>
                                        <span className='absolute p-2 right-20 text-xl rounded-full bg-base-300 '>+</span>
                                    </td>
                                    <td>
                                        $ 14.00
                                    </td>
                                    <td>
                                        <RxCrossCircled className='text-2xl'></RxCrossCircled>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr className='w-full mt-4' />
                        <div className='mt-4 flex justify-between'>
                            <button className='rounded-full btn'>Return to Shop</button>
                            <button className='rounded-full btn'>Update Cart</button>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 border rounded-xl shadow-xl p-4'>
                    <h1 className='text-2xl font-bold text-start'>Cart Total</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                        <p>Subtotal</p>
                        <p>$ 84.00</p>
                    </div>
                    <hr className='w-full border-2 mt-3'/>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                        <p>Shipping </p>
                        <p>Free</p>
                    </div>
                    <hr className='w-full border-2 mt-3'/>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                        <p>Total :</p>
                        <p className='font-bold'>$ 84.00</p>
                    </div>
                    <Link to='/checkOut'><button className='text-white btn rounded-full bg-orange-500 w-full mt-4'>Proceed to Checkout</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ShopCart;