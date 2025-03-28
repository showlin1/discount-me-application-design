import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { FaSearch } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const AllCart = () => {
    const allCarts = useLoaderData()
    return (
        <div className='pt-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-5'>
                <div className='text-start'>
                    <h1 className='text-5xl mb-4'>Explore <span className='text-orange-600'>Restaurants</span></h1>
                    <p>Check your city Near by <br /> Restaurant</p>
                </div>
                <div className="form-control relative mt-5">
                    <input type="text" className="input input-bordered rounded-full px-10 w-full md:w-auto" />
                    <span className="absolute mt-1 left-3 text-white rounded-l-full bg-orange-500 text-2xl p-2"><IoLocationSharp></IoLocationSharp></span>
                    <select className='absolute mt-1 left-10 text-white bg-orange-500 p-2'>
                        <option className='text-white'> Location</option>
                    </select>
                    <span className="absolute p-2 text-white right-4 rounded-full bg-orange-500 mt-2 "><FaSearch></FaSearch></span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
                {
                    allCarts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default AllCart;