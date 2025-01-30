import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdHomeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CheckOut = () => {
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
            <div className='w-full mb-16 flex gap-5'>
                <div className='w-2/3'>
                    <h1 className='text-3xl font-bold text-start mb-5'>Billing Information</h1>
                    <div className='flex justify-between'>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">First Name</span>
                            </label>
                            <input type="text" placeholder="Your First Name" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Last Name</span>
                            </label>
                            <input type="text" placeholder="Your Last Name" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Company Name (optional)</span>
                            </label>
                            <input type="text" placeholder="Company name" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text ">Select Address</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered border-base-300 focus:outline-base-500" required />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-4'>
                        <div>
                            <label className="label ">
                                <span className="label-text ">Country / Region</span>
                            </label>
                            <select
                                required
                                name='Select'
                                className='w-full px-4 py-3 border-2 border-base-300 focus:outline-base-300 rounded-md'
                            >
                                <option className='text-base-100'>Select</option>
                            </select>
                        </div>
                        <div className='text-start'>
                            <label className="label ">
                                <span className="label-text ">States</span>
                            </label>
                            <select
                                required
                                name='Select'
                                className='w-36 px-4 py-3 border-2 border-base-300 focus:outline-base-300 rounded-md'
                            >
                                <option className='text-base-100'>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5'>
                        <div className='w-full'>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address" name="email" className="input input-bordered border-base-300 focus:outline-base-500" required />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text ">Phone</span>
                                </label>
                                <input type="phoneNumber" placeholder="Phone Number" name="number" className="input input-bordered border-base-300 focus:outline-base-500" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 border rounded-xl shadow-xl p-4'>
                    <h1 className='text-2xl font-bold text-start'>Order Summary</h1>
                    <div className='flex justify-between mt-5'>
                        <div className='flex gap-3'>
                            <img className='rounded-xl h-16 w-16' src="https://i.ibb.co.com/ZzL39cLB/freez.png" alt="Freez" />
                            <h3 className='font-bold text-center pt-5'>Freezer Xl</h3>
                        </div>
                        <p className='pt-5'>$ 84.00</p>
                    </div>
                    <hr className='w-full border-2 mt-3' />
                    <div className='flex justify-between mt-5'>
                        <p>Shipping </p>
                        <p>Free</p>
                    </div>
                    <hr className='w-full border-2 mt-3' />
                    <div className='flex justify-between mt-5'>
                        <p>Total :</p>
                        <p className='font-bold'>$ 84.00</p>
                    </div>
                    <h1 className='text-start text-xl font-bold mt-3'>Payment Method</h1>
                    <div className="form-control w-24">
                        <label className="cursor-pointer label">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-warning" />
                            <span className="label-text">Cash on Delivery</span>
                        </label>
                    </div>
                    <div className="form-control w-24">
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-warning" />
                            <span className="label-text">Paypal</span>
                        </label>
                    </div>
                    <div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="text-white btn rounded-full bg-orange-500 w-full mt-4" onClick={() => document.getElementById('my_modal_3').showModal()}>Place Order</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className='text-center pt-8 px-48'><FaCheck className='text-6xl text-white pt-2 rounded-full bg-green-500'></FaCheck></div>
                                <p className="py-4 font-bold text-xl">Order Successfully</p>
                                <hr className='w-full border-1' />
                                <p className='mt-3'>If you want to tracking your order please install our app 
                                   <br /> from Play store or App store</p>

                                <h6 className="text-xl font-bold mt-3 mb-3">Download App</h6>
                                <div className='flex gap-2 px-28'>
                                    <img src="https://i.ibb.co.com/BHzw7dv7/barcode.jpg" alt="" />
                                    <div>
                                        <img className='w-[110px] h-[60px] mb-3 rounded-xl' src="https://i.ibb.co.com/xtXzyJ0H/google1.png" alt="" />
                                        <img className='w-[110px] h-[60px] rounded-xl' src="https://i.ibb.co.com/33HB56z/apple1.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;