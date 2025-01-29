import React from 'react';
import Header from '../../Component/Header/Header';
import { Link } from 'react-router-dom';

const ForgetPass = () => {
    return (
        <div className='pt-20'>
            <div>
                <Header></Header>
            </div>
            <div className='m-16 bg-white shadow-2xl rounded-xl mx-auto w-1/2 p-6'>
                <h2 className="text-3xl  font-bold text-center my-10">Forgot Password</h2>
                <form className=" mx-auto">
                    <div className="form-control">
                        <input type="email" placeholder="Email" name="email" className="input input-bordered border-base-300 focus:outline-base-500" required />
                    </div>
                    <Link to='/newPass'>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 rounded-full text-white hover:bg-orange-500">Submit</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ForgetPass;