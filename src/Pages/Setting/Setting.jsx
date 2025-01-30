import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Setting = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="rounded-xl shadow-xl p-6 border-2">
                <h1 className='text-start text-4xl font-bold mb-5'>Account Settings</h1>
                <hr />
                <div className="flex gap-6">
                    <div className="p-6 w-1/2">
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">First Name</span>
                            </label>
                            <input type="text" placeholder="Dianne" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Last Name</span>
                            </label>
                            <input type="text" placeholder="Russell" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" placeholder="dianne.russell@gmail.com" name="email" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Phone Number</span>
                            </label>
                            <input type="phoneNumber" placeholder="(603) 555-0123" name="number" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                        <div className="text-start">
                            <button className="text-white mt-4 bg-orange-500 btn rounded-full">Save Changes</button>
                        </div>
                    </div>
                    <div className="pt-24 w-1/2">
                        <div className='px-40'>
                            <img className='h-[130px] w-[280px] rounded-full' src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Picture" />
                        </div>
                        <div className="">
                            <button className="text-orange-500 mt-4 border-orange-500 bg-white  btn rounded-full">Chose Image</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-xl shadow-xl p-6 mt-14 border-2">
                <h1 className='text-start text-4xl font-bold mb-5'>Belling Address</h1>
                <hr />
                <div className="p-6">
                    <div className="flex justify-between">
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">First Name</span>
                            </label>
                            <input type="text" placeholder="Dianne" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Last Name</span>
                            </label>
                            <input type="text" placeholder="Russell" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Company Name (optional)</span>
                            </label>
                            <input type="text" placeholder="ZakirSoft" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text ">Street Address</span>
                        </label>
                        <input type="text" placeholder="4041 Parl" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4'>
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
                                className='w-full px-4 py-3 border-2 border-base-300 focus:outline-base-300 rounded-md'
                            >
                                <option className='text-base-100'>Select</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Zip Code</span>
                            </label>
                            <input type="text" placeholder="20033" name="name" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="form-control w-1/2">
                            <label className="label ">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" placeholder="dianne.russell@gmail.com" name="email" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label ">
                                <span className="label-text ">Phone Number</span>
                            </label>
                            <input type="phoneNumber" placeholder="(603) 555-0123" name="number" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        </div>
                    </div>
                    <div className="text-start">
                        <button className="text-white mt-4 bg-orange-500 btn rounded-full">Save Changes</button>
                    </div>
                </div>
            </div>
            <div className="rounded-xl shadow-xl p-6 mt-14 border-2">
                <h1 className='text-start text-4xl font-bold mb-5'>Account Settings</h1>
                <hr />
                <div>
                    <label className="label ">
                        <span className="label-text ">Current Password</span>
                    </label>
                    <div className="relative form-control">
                        <input type="password" placeholder="Password" name="password" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        <span className="absolute mt-4 right-4 " onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="w-1/2">
                        <label className="label ">
                            <span className="label-text ">Current Password</span>
                        </label>
                        <div className="relative form-control">
                            <input type="password" placeholder="Password" name="password" className="input input-bordered border-base-300 focus:outline-base-500" required />
                            <span className="absolute mt-4 right-4 " onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <label className="label ">
                            <span className="label-text ">Current Password</span>
                        </label>
                        <div className="relative form-control">
                            <input type="password" placeholder="Password" name="password" className="input input-bordered border-base-300 focus:outline-base-500" required />
                            <span className="absolute mt-4 right-4 " onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-start">
                    <button className="text-white mt-4 bg-orange-500 btn rounded-full">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Setting;