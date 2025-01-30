import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";


const OrderDetails = () => {
    return (
        <div>
            <div className="rounded-xl shadow-xl p-6">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <h1 className='text-start text-4xl font-bold mb-8'>Order Details</h1>
                        <li className="pt-3">April 24, 2021</li>
                        <li className="pt-3">3 Products</li>
                    </div>
                    <Link to='/shareReview'>
                        <div>
                            <u className="text-orange-600 pt-3">Share Review</u>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <div className="rounded-xl shadow-xl p-6 w-2/3 flex">
                        <div className="border-2 rounded-l-xl border-base-300 w-1/2 ">
                            <h1 className="text-gray-400 p-5 text-start">BILLING ADDRESS</h1>
                            <hr />
                            <h4 className="font-bold text-start mt-3 px-5">Dainne Russell</h4>
                            <p className="mt-4 px-5 text-start">4140 Parker Rd. Allentown, New Mexico 31134</p>
                            <p className="mt-4 px-5 text-gray-400 text-start">Email</p>
                            <p className="mt-1 px-5 text-start">dainne.ressell@gmail.com</p>
                            <p className="mt-4 px-5 text-gray-400 text-start">Phone</p>
                            <p className="mt-1 px-5 text-start mb-5">(671) 555-0110</p>
                        </div>
                        <div className="border-2 rounded-r-xl border-base-300 w-1/2 ">
                            <h1 className="text-gray-400 p-5 text-start">SHOPPING ADDRESS</h1>
                            <hr />
                            <h4 className="font-bold text-start px-5 mt-3">Dainne Russell</h4>
                            <p className="mt-4 px-5 text-start">4140 Parker Rd. Allentown, New Mexico 31134</p>
                            <p className="mt-4 px-5 text-gray-400 text-start">Email</p>
                            <p className="mt-1 px-5 text-start">dainne.ressell@gmail.com</p>
                            <p className="mt-4 px-5 text-gray-400 text-start">Phone</p>
                            <p className="mt-1 px-5 text-start mb-5">(671) 555-0110</p>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-xl p-4 w-1/3">
                        <div className="border-2 rounded-xl border-base-300">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-gray-400 text-start px-1 pt-4">ORDER ID:</p>
                                    <p className="px-1 pt-2 text-start">#4152</p>
                                </div>
                                <div className="border-l-2 mt-3 border-gray-300 h-24 mx-auto"></div>
                                <div>
                                    <p className="text-gray-400 text-start px-1 pt-4">Payment Method</p>
                                    <p className="px-1 pt-2 text-start">Paypal</p>
                                </div>
                            </div>
                            <hr className="mt-3" />
                            <div className="flex justify-between p-3">
                                <p>Subtotal</p>
                                <p>$365.00</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-3">
                                <p>Discount</p>
                                <p>20%</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-3">
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="flex justify-between p-3">
                                <p className="text-xl">Total</p>
                                <p className="text-orange-600 text-xl">$84.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-10">
                    <div className="text-white p-3 rounded-full bg-orange-600">
                        <FaCheck></FaCheck>
                    </div>
                    <hr className="w-full border mt-3 p-1 bg-orange-600" />
                    <div className="text-white p-2 rounded-full bg-orange-600">
                        02
                    </div>
                    <hr className="w-full border mt-3 p-1 bg-orange-600" />
                    <div className="text-white p-2 rounded-full bg-orange-600">
                        03
                    </div>
                    <hr className="w-full border mt-3 p-1 bg-orange-600" />
                    <div className="text-white p-2 rounded-full bg-orange-600">
                        04
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-orange-600">Order Received</div>
                    <div className="text-orange-600">Processing</div>
                    <div className="text-orange-600">On the Way</div>
                    <div className="text-orange-600">Delivered</div>
                </div>
                <div className="overflow-x-auto mt-14">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-300">
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>SUBTOTAL</th>
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
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Freezer</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    $14.00
                                </td>
                                <td>X5</td>
                                <th>
                                    $70.00
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-xl h-16 w-16">
                                                <img
                                                    src="https://i.ibb.co.com/ZzL39cLB/freez.png"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Green Capsicum</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    $28.00
                                </td>
                                <td>X5</td>
                                <th>
                                    $28.00
                                </th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-xl h-16 w-16">
                                                <img
                                                    src="https://i.ibb.co.com/ZzL39cLB/freez.png"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Green Chill</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    $267.00
                                </td>
                                <td>X5</td>
                                <th>
                                    $267.00
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;