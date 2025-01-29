import React, { useState } from 'react';
import Header from '../../Component/Header/Header';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const NewPass = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordA, setShowPasswordA] = useState(false);
    return (
        <div className='pt-20'>
            <div>
                <Header></Header>
            </div>
            <div className='m-16 bg-white shadow-2xl rounded-xl mx-auto w-1/2 p-6'>
                <h2 className="text-3xl  font-bold text-center my-10">Set New Password</h2>
                <form className=" mx-auto">
                    <div className="relative form-control mt-4">
                        <input type="password" placeholder="Password" name="password" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        <span className="absolute mt-4 right-4 " onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <div className="relative form-control mt-4">
                        <input type="password" placeholder="Confirm Password" name="password" className="input input-bordered border-base-300 focus:outline-base-500" required />
                        <span className="absolute mt-4 right-4 " onClick={() => setShowPasswordA(!showPasswordA)}>
                            {
                                showPasswordA ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 rounded-full text-white hover:bg-orange-500">Create Account</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default NewPass;