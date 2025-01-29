import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='pt-20'>
            <div className=''>
                <Header></Header>
            </div>
            <div className='m-16 bg-white shadow-2xl rounded-xl mx-auto w-1/2 p-6'>
                <h2 className="text-3xl  font-bold text-center my-10">Sign In</h2>
                <form className=" mx-auto">
                    <div className="form-control">
                        <input type="email" placeholder="Email" name="email" className="input input-bordered border-base-300 focus:outline-base-500" required />
                    </div>
                    <div className="relative form-control mt-4">
                        <input type="password" placeholder="Password" name="password" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        <span className="absolute mt-4 right-4 " onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div className='flex gap-2'>
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <span className="label-text">Remember me</span>
                        </div>
                        <div>
                            <Link to='/forget'>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forget password</a>
                                </label>
                            </Link>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-600 rounded-full text-white hover:bg-orange-500">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4 mb-8">Don't have account <Link to='/register' className="text-black font-bold">Register</Link></p>
            </div>
        </div>
    );
};

export default SignIn;