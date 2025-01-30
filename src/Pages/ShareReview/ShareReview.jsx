import React from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa";

const ShareReview = () => {
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
                    <div className="text-base text-orange-600">Share Review</div>
                </div>
            </div>
            <div className='flex text-start gap-5'>
                <div className='w-80'>
                    <div className='flex gap-4 px-28'>
                        <h1 className=' text-4xl font-bold'>4.8</h1>
                        <FaStar className=' text-4xl pt-2'></FaStar>
                    </div>
                    <p className='text-center mt-2'>1,64,002 Ratings <br />
                        & <br />
                        5,922 Reviews</p>
                </div>
                <div className='w-12'>
                    <div className='flex gap-2'>
                        <p className='text-xl'>5</p>
                        <div className='pt-1'>
                            <FaStar className='text-orange-500 text-xl'></FaStar>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-xl'>4</p>
                        <div className='pt-1'>
                            <FaStar className='text-orange-500 text-xl'></FaStar>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-xl'>3</p>
                        <div className='pt-1'>
                            <FaStar className='text-orange-500 text-xl'></FaStar>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-xl'>2</p>
                        <div className='pt-1'>
                            <FaStar className='text-orange-500 text-xl'></FaStar>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-xl'>1</p>
                        <div className='pt-1'>
                            <FaStar className='text-orange-500 text-xl'></FaStar>
                        </div>
                    </div>

                </div>
                <div className='w-80'>
                    <div ><progress className="progress w-80" value="90" max="100"></progress></div>
                    <div className='mt-1'><progress className="progress w-80" value="60" max="100"></progress></div>
                    <div className='mt-1'><progress className="progress w-80" value="80" max="100"></progress></div>
                    <div className='mt-1'><progress className="progress w-80" value="10" max="100"></progress></div>
                    <div className='mt-1'><progress className="progress w-80" value="5" max="100"></progress></div>
                </div>
            </div>
            <div className='flex gap-10 mt-10'>
                <div>
                    <FaStar className=' text-6xl text-orange-500'></FaStar>
                </div>
                <div>
                    <FaStar className=' text-6xl text-orange-500'></FaStar>
                </div>
                <div>
                    <FaRegStar className=' text-6xl '></FaRegStar>
                </div>
                <div>
                    <FaRegStar className=' text-6xl '></FaRegStar>
                </div>
                <div>
                    <FaRegStar className=' text-6xl '></FaRegStar>
                </div>
            </div>
            <p className='text-start text-xl mt-14'>Please share your opinion about the product</p>
            <textarea className="mb-16 block w-full h-32 px-5 py-3 text-gray-900 text-xl mt-3 placeholder-gray-400 border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-base-400 focus:ring-base-300 focus:ring-opacity-40 dark:focus:border-base-300 focus:outline-none focus:ring bg-base-300" placeholder="Your review"></textarea>
        </div>
    );
};

export default ShareReview;