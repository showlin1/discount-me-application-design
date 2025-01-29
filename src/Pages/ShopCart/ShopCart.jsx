import React from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

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

        </div>
    );
};

export default ShopCart;