import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Categories from '../../Component/Categories/Categories';
import { BsFire } from "react-icons/bs";

const VisitCafe = () => {
    const allCarts = useLoaderData();
    const { id } = useParams();
    const cartIdInt = parseInt(id);
    const cart = allCarts.find(cart => cart.id === cartIdInt);
    // console.log(cart);
    const { restaurantName, image, rating, location, details } = cart;
    return (
        <div className='pt-24 mb-16'>
            <div>
                <img className='w-[1300px] h-[400px] rounded-xl border-2 border-green-500' src={image} alt="" />
                <h1 className='text-3xl font-bold text-start mt-4'> <span className='text-green-500'>Villagio</span> {restaurantName}</h1>
                <hr className='w-full border-2 mt-4' />
                <div className='mt-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div>
                            <div className='flex gap-2'>
                                <IoLocationOutline className='text-2xl text-green-500'></IoLocationOutline>
                                <p>{location}</p>
                            </div>
                            <div className="flex gap-2 mt-5">
                                <div className='flex gap-1'>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-base-300"></IoStar>
                                </div>
                                <p className='text-xl'>{rating}</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-10 w-20 stroke-current text-green-500">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <p className='text-start'>{details}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-16 max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex gap-1 '>
                            <h1 className='text-3xl font-bold'>Items</h1>
                            <BsFire className='text-4xl text-orange-500'></BsFire>
                        </div>
                        <div className='flex justify-end'>
                            <Link to='/shoppingPage'>
                                <p className='text-green-500 btn rounded-full text-xl '>See all</p>
                            </Link>
                        </div>
                    </div>

                    <Categories></Categories>
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                        <div className="card card-compact bg-base-100 w-full shadow-xl">
                            <figure>
                                <img className='h-[180px] w-full'
                                    src="https://i.ibb.co.com/LzQ02jY7/shop1.jpg"
                                    alt="Image" />
                            </figure>
                            <div className="flex justify-between mt-4">
                                <div className='text-start'>
                                    <h2 className="card-title">Long Sleeve T-Shirt</h2>
                                    <p>Delicouse tackos, appetizing..</p>
                                </div>
                                <div>
                                    <p className='text-2xl pt-2'>$ 45.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-full shadow-xl">
                            <figure>
                                <img className='h-[180px] w-full'
                                    src="https://i.ibb.co.com/LzQ02jY7/shop1.jpg"
                                    alt="Image" />
                            </figure>
                            <div className="flex justify-between mt-4">
                                <div className='text-start'>
                                    <h2 className="card-title">Long Sleeve T-Shirt</h2>
                                    <p>Delicouse tackos, appetizing..</p>
                                </div>
                                <div>
                                    <p className='text-2xl pt-2'>$ 45.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-full shadow-xl">
                            <figure>
                                <img className='h-[180px] w-full'
                                    src="https://i.ibb.co.com/jZDPQSCS/shop2.jpg"
                                    alt="Image" />
                            </figure>
                            <div className="flex justify-between mt-4">
                                <div className='text-start'>
                                    <h2 className="card-title">Long Sleeve T-Shirt</h2>
                                    <p>Delicouse tackos, appetizing..</p>
                                </div>
                                <div>
                                    <p className='text-2xl pt-2'>$ 45.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-full shadow-xl">
                            <figure>
                                <img className='h-[180px] w-full'
                                    src="https://i.ibb.co.com/pB8M7Sqz/item3.jpg"
                                    alt="Image" />
                            </figure>
                            <div className="flex justify-between mt-4">
                                <div className='text-start'>
                                    <h2 className="card-title">Long Sleeve T-Shirt</h2>
                                    <p>Delicouse tackos, appetizing..</p>
                                </div>
                                <div>
                                    <p className='text-2xl pt-2'>$ 45.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-full shadow-xl">
                            <figure>
                                <img className='h-[180px] w-full'
                                    src="https://i.ibb.co.com/0yYwDqwf/item4.jpg"
                                    alt="Image" />
                            </figure>
                            <div className="flex justify-between mt-4">
                                <div className='text-start'>
                                    <h2 className="card-title">Long Sleeve T-Shirt</h2>
                                    <p>Delicouse tackos, appetizing..</p>
                                </div>
                                <div>
                                    <p className='text-2xl pt-2'>$ 45.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-full shadow-xl">
                            <figure>
                                <img className='h-[180px] w-full'
                                    src="https://i.ibb.co.com/pB8M7Sqz/item3.jpg"
                                    alt="Image" />
                            </figure>
                            <div className="flex justify-between mt-4">
                                <div className='text-start'>
                                    <h2 className="card-title">Long Sleeve T-Shirt</h2>
                                    <p>Delicouse tackos, appetizing..</p>
                                </div>
                                <div>
                                    <p className='text-2xl pt-2'>$ 45.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-full shadow-xl">
                            <figure>
                                <img className='h-[180px] w-full'
                                    src="https://i.ibb.co.com/pB8M7Sqz/item3.jpg"
                                    alt="Image" />
                            </figure>
                            <div className="flex justify-between mt-4">
                                <div className='text-start'>
                                    <h2 className="card-title">Long Sleeve T-Shirt</h2>
                                    <p>Delicouse tackos, appetizing..</p>
                                </div>
                                <div>
                                    <p className='text-2xl pt-2'>$ 45.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-full shadow-xl">
                            <figure>
                                <img className='h-[180px] w-full'
                                    src="https://i.ibb.co.com/0yYwDqwf/item4.jpg"
                                    alt="Image" />
                            </figure>
                            <div className="flex justify-between mt-4">
                                <div className='text-start'>
                                    <h2 className="card-title">Long Sleeve T-Shirt</h2>
                                    <p>Delicouse tackos, appetizing..</p>
                                </div>
                                <div>
                                    <p className='text-2xl pt-2'>$ 45.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-full shadow-xl">
                            <figure>
                                <img className='h-[180px] w-full'
                                    src="https://i.ibb.co.com/pB8M7Sqz/item3.jpg"
                                    alt="Image" />
                            </figure>
                            <div className="flex justify-between mt-4">
                                <div className='text-start'>
                                    <h2 className="card-title">Long Sleeve T-Shirt</h2>
                                    <p>Delicouse tackos, appetizing..</p>
                                </div>
                                <div>
                                    <p className='text-2xl pt-2'>$ 45.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitCafe;