import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const AllCart = () => {
    const allCarts = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                {
                    allCarts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default AllCart;