import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
    return (
        <div>
            <div className='p-5 rounded-xl shadow-xl mt-10'>

                <h1 className='text-start text-4xl font-bold mb-8'>Order History</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-200">
                                <th>ORDER ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>STATUS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr >
                                <th>1</th>
                                <td>8 Sep, 2020</td>
                                <td>$135.00 (5 Products)</td>
                                <td>Processing</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>8 jun, 2022</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-green-500'>Completed</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>8 Oct, 2023</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-red-500'>Canceled</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>10 March, 2022</td>
                                <td>$135.00 (5 Products)</td>
                                <td>Processing</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>5 Nov, 2024</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-orange-500'>On the Way</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>8 Sep, 2020</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-green-500'>Completed</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr >
                                <th>7</th>
                                <td>8 Sep, 2020</td>
                                <td>$135.00 (5 Products)</td>
                                <td>Processing</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>8 jun, 2022</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-green-500'>Completed</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>8 Oct, 2023</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-red-500'>Canceled</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>10</th>
                                <td>10 March, 2022</td>
                                <td>$135.00 (5 Products)</td>
                                <td>Processing</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>11</th>
                                <td>5 Nov, 2024</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-orange-500'>On the Way</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>12</th>
                                <td>8 Sep, 2020</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-green-500'>Completed</td>
                                <Link to='/dashboard/orderHistory/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="join mt-5 mb-4">
                    <button className="join-item rounded-full text-xl btn">{'<'}</button>
                    <button className="join-item rounded-full text-xl btn gap-2 bg-orange-500 text-white">1</button>
                    <button className="join-item rounded-full text-xl btn">2</button>
                    <button className="join-item rounded-full text-xl btn">3</button>
                    <button className="join-item rounded-full text-xl btn">{'>'}</button>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;