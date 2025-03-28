import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RxClock } from "react-icons/rx";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaRegWindowRestore } from "react-icons/fa6";
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Home = () => {
    const allCarts = useLoaderData();

    return (
        <div className='pt-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-6'>
                <div className=''>
                    <h1 className='text-6xl text-start pt-5 lg:pt-20 font-bold'>Good <span className=' text-orange-600'>Food</span> great,<br /> Memories</h1>
                    <p className='text-start text-2xl mt-5'>Enable diners to customize their <br /> booking by requesting a specific table <br /> location or view.</p>
                    <div className="form-control relative mt-5">
                        <input type="text" className="input input-bordered rounded-full px-10 w-full md:w-auto" />
                        <span className="absolute mt-1 left-3 text-white rounded-l-full bg-green-500 text-2xl p-2"><IoLocationSharp></IoLocationSharp></span>
                        <select className='absolute mt-1 left-10 text-white bg-green-500 p-2'>
                            <option className='text-white'> Location</option>
                        </select>
                        <span className="absolute p-2 text-white right-4 rounded-full bg-green-500 mt-2 "><FaSearch></FaSearch></span>
                    </div>
                </div>
                <div className=''>
                    <img src="https://i.ibb.co.com/23W516Lc/table.png" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 m-16 bg-white shadow-2xl rounded-xl mx-auto p-8'>
                <div className='text-start flex gap-2'>
                    <MdOutlineDiscount className='text-5xl'></MdOutlineDiscount>
                    <div>
                        <h4 className='font-bold'>Discount</h4>
                        <p>Every week new sales</p>
                    </div>
                </div>
                <div className='text-start flex gap-2'>
                    <TbTruckDelivery className='text-5xl'></TbTruckDelivery>
                    <div>
                        <h4 className='font-bold'>Free Delivery</h4>
                        <p>100% free for all orders</p>
                    </div>
                </div>
                <div className='text-start flex gap-2'>
                    <RxClock className='text-5xl'></RxClock>
                    <div>
                        <h4 className='font-bold'>Great Support 24/7</h4>
                        <p>We care your experiences</p>
                    </div>
                </div>
                <div className='text-start flex gap-2'>
                    <RiSecurePaymentLine className='text-5xl'></RiSecurePaymentLine>
                    <div>
                        <h4 className='font-bold'>Secure Payment</h4>
                        <p>100% secure payment method</p>
                    </div>
                </div>
            </div>
            <div className='mb-16 text-start'>
                <div className='grid grid-cols-2 '>
                    <div>
                        <h1 className='text-5xl mb-4'>Explore <span className='text-orange-600'>Top Restaurants</span></h1>
                        <p>Check your city Near by <br /> Restaurant</p>
                    </div>
                    <Link to='/allCart'>
                        <div className='flex gap-2 justify-end pt-8'>
                            <p className=''>See All</p>
                            <p>{">"}</p>
                        </div>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {
                        allCarts.slice(0, 3).map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                    }
                </div>
                <hr className='max-w-7xl border-1 mt-5' />
            </div>
            <div className='text-start mb-16'>
                <h1 className='text-4xl font-bold mb-5'>Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
                    <div className="w-96">
                        <figure>
                            <img className='rounded-xl w-[280px] h-[190px]'
                                src="https://i.ibb.co.com/kghn0pVK/food1.png"
                                alt="" />
                        </figure>
                        <div className="">
                            <h2 className="">Skateboard Shoe</h2>
                            <p>$ 125</p>
                        </div>
                    </div>
                    <div className="w-96">
                        <figure>
                            <img className='rounded-xl w-[280px] h-[190px]'
                                src="https://i.ibb.co.com/BHvQRBB8/food2.png"
                                alt="" />
                        </figure>
                        <div className="">
                            <h2 className="">Skateboard Shoe</h2>
                            <p>$ 125</p>
                        </div>
                    </div>
                    <div className="w-96">
                        <figure>
                            <img className='rounded-xl w-[280px] h-[190px]'
                                src="https://i.ibb.co.com/rPfT6Jf/food3.png"
                                alt="" />
                        </figure>
                        <div className="">
                            <h2 className="">Skateboard Shoe</h2>
                            <p>$ 125</p>
                        </div>
                    </div>
                    <div className="w-96">
                        <figure>
                            <img className='rounded-xl w-[280px] h-[190px]'
                                src="https://i.ibb.co.com/Lzy8xDrX/food4.png"
                                alt="" />
                        </figure>
                        <div className="">
                            <h2 className="">Skateboard Shoe</h2>
                            <p>$ 125</p>
                        </div>
                    </div>
                    <div className="w-96 ">
                        <figure>
                            <img className='rounded-xl w-[280px] h-[190px]'
                                src="https://i.ibb.co.com/N6ZNwXFC/food5.png"
                                alt="" />
                        </figure>
                        <div className="">
                            <h2 className="">Skateboard Shoe</h2>
                            <p>$ 125</p>
                        </div>
                    </div>
                    <div className="w-96">
                        <figure>
                            <img className='rounded-xl w-[280px] h-[190px]'
                                src="https://i.ibb.co.com/C5zqqrjB/food6.png"
                                alt="" />
                        </figure>
                        <div className="">
                            <h2 className="">Skateboard Shoe</h2>
                            <p>$ 125</p>
                        </div>
                    </div>
                    <div className="w-96">
                        <figure>
                            <img className='rounded-xl w-[280px] h-[190px]'
                                src="https://i.ibb.co.com/kghn0pVK/food1.png"
                                alt="" />
                        </figure>
                        <div className="">
                            <h2 className="">Skateboard Shoe</h2>
                            <p>$ 125</p>
                        </div>
                    </div>
                    <div className="w-96">
                        <figure>
                            <img className='rounded-xl w-[280px] h-[190px]'
                                src="https://i.ibb.co.com/BHvQRBB8/food2.png"
                                alt="" />
                        </figure>
                        <div className="">
                            <h2 className="">Skateboard Shoe</h2>
                            <p>$ 125</p>
                        </div>
                    </div>
                    <div className="w-96">
                        <figure>
                            <img className='rounded-xl w-[280px] h-[190px]'
                                src="https://i.ibb.co.com/rPfT6Jf/food3.png"
                                alt="" />
                        </figure>
                        <div className="">
                            <h2 className="">Skateboard Shoe</h2>
                            <p>$ 125</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-start mb-16'>
                <h1 className='text-4xl font-bold mb-5'>Customer experience is <br /> important to us</h1>
                <p className='mt-6 text-orange-600'>Sed dictum ipsum elementum diam dapibus, ut sodales orci monte <br />
                    consectetur. Fusce a mollis lorem. Orci varius natoque penatibus.</p>

                <div className='mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-auto justify-between w-full'>
                    <div>
                        < MdProductionQuantityLimits className='text-5xl text-white p-2 bg-green-500 rounded-lg'></ MdProductionQuantityLimits>
                        <p className='text-xl'>Original Products</p>
                    </div>
                    <div>
                        < AiOutlineSecurityScan className='text-5xl text-white p-2 bg-green-500 rounded-lg'></ AiOutlineSecurityScan>
                        <p className='text-xl'>Satisfaction Guarantee</p>
                    </div>
                    <div>
                        < FaRegWindowRestore className='text-5xl text-white p-2 bg-green-500 rounded-lg'></ FaRegWindowRestore>
                        <p className='text-xl'>New Arrival Everyday</p>
                    </div>
                    <div>
                        < TbTruckDelivery className='text-5xl text-white p-2 bg-green-500 rounded-lg'></ TbTruckDelivery>
                        <p className='text-xl'>Fast Shipping</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;