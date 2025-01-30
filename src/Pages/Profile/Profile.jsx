import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className=''>
            <div className='w-full flex gap-4'>
                <div className='w-1/2 p-5 rounded-xl shadow-xl'>
                    <div className='px-40'>
                        <img className='h-[100px] w-[150px] rounded-full' src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Picture" />
                    </div>
                    <h1 className='text-2xl font-bold mt-4'>Dianni Russell</h1>
                    <p className='mt-2 text-xl'>Customer</p>
                    <p className='mt-2 text-xl text-orange-600'>Edit Profile</p>
                </div>
                <div className='w-1/2 p-5 rounded-xl shadow-xl'>
                    <h1 className='text-gray-400 text-start font-bold'>BILLING ADDRESS</h1>
                    <h1 className='text-2xl text-start font-bold mt-4'>Dianni Russell</h1>
                    <p className='mt-2 text-start'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                    <p className='mt-2 text-start'>dainne.ressell@gmail.com</p>
                    <p className='mt-2 text-start'>(671) 555-0110</p>
                    <p className='mt-2 text-start text-orange-600'>Edit Profile</p>
                </div>
            </div>
            <div className='p-5 rounded-xl shadow-xl mt-10'>
                <div className='flex justify-between mb-8'>
                    <h1 className='text-start text-4xl font-bold'>Recet Order History</h1>
                    <Link to='/orderHistory'> <p className='text-orange-500 pt-4 font-bold'>View All</p></Link>
                </div>
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
                                <Link to='/dashboard/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>8 jun, 2022</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-green-500'>Completed</td>
                                <Link to='/dashboard/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>8 Oct, 2023</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-red-500'>Canceled</td>
                                <Link to='/dashboard/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>10 March, 2022</td>
                                <td>$135.00 (5 Products)</td>
                                <td>Processing</td>
                                <Link to='/dashboard/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>5 Nov, 2024</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-orange-500'>On the Way</td>
                                <Link to='/dashboard/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>8 Sep, 2020</td>
                                <td>$135.00 (5 Products)</td>
                                <td className='text-green-500'>Completed</td>
                                <Link to='/dashboard/viewDetails'><td className='text-orange-600'>View Details</td></Link>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;