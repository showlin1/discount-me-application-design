import React from 'react';
import { IoStar } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    const { id, restaurantName, image, rating, location, details } = cart;
    return (
        <div className="card p-6 border-2 h-[500px]">
            <figure className="w-[350px] h-[190px] rounded-xl"><img src={image} /></figure>
            <div className="mt-4">
                <div className="flex justify-between mt-5 mb-5">
                    <h2 className="card-title">{restaurantName}</h2>
                    <div className="flex gap-2">
                        <IoStar className="text-2xl text-orange-500"></IoStar>
                        <p>({rating})</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-4">
                    <IoLocationOutline className='text-3xl'></IoLocationOutline>
                    <p>{location}</p>
                </div>
                {
                    details.length > 84 ? <p className='text-start'>{details.slice(0, 84)}<Link
                        to={`/cart/${id}`}
                        className="text-blue-600 font-bold">Read More...</Link></p>
                        : <p>{details}</p>
                }
                <Link to={`/cart/${id}`}>
                    <div>
                        <button className='text-white bg-green-500 rounded-xl p-2 w-full'>Visit</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Cart;