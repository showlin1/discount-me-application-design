import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer bg-neutral text-neutral-content p-10">
                <nav>
                    <img src="https://i.ibb.co.com/rfZfZzn/logo.png" alt="" />
                    <p>Ecommerce is a free UI Kit from Paperpillar</p>
                    <p> that you can use for your personal or</p>
                    <p>commercial project.</p>
                    <div className='grid grid-cols-2 gap-1 mt-2'>
                        <div>
                            <input type="email" placeholder='Type your Email address' className='input input-bordered border-base-300 focus:outline-base-500 bg-black  rounded-full' />
                        </div>
                        <div>
                            <input type="text" placeholder='Submit' className='p-3 rounded-full' />
                        </div>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold text-white">Account</h6>
                    <a className="link link-hover">My Account</a>
                    <a className="link link-hover">Login / Register</a>
                    <a className="link link-hover">Cart</a>
                    <a className="link link-hover">Wishlist</a>
                    <a className="link link-hover">Shop</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold text-white">Quick Link</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms Of Use</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold text-white">Support</h6>
                    <a className="link link-hover">showlin@gmail.com</a>
                    <a className="link link-hover">+88015-88888-9999</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold text-white">Download App</h6>
                    <div className='grid grid-cols-2 gap-2'>
                        <img src="https://i.ibb.co.com/BHzw7dv7/barcode.jpg" alt="" />
                        <div>
                            <img className='w-[110px] h-[60px]' src="https://i.ibb.co.com/xtXzyJ0H/google1.png" alt="" />
                            <img className='w-[110px] h-[60px]' src="https://i.ibb.co.com/33HB56z/apple1.png" alt="" />
                        </div>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;