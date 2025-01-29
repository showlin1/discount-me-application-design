import { IoStar } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import '../../Component/Header/Header.css';
import { MdHomeFilled } from "react-icons/md";

const ShoppingDetails = () => {
    const shoppingCarts = useLoaderData();
    const { id } = useParams();
    const shopIdInt = parseInt(id);
    const cart = shoppingCarts.find(cart => cart.id === shopIdInt);
    const { shoppingName, image, category, review, price, description } = cart;
    return (
        <div className="pt-24">
            <div>
                <div className="header-item h-[120px] bg-fixed mb-16">
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
                        <div className="text-base text-orange-600">Details</div>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                <div>
                    <img className="rounded-xl" src={image} alt="Image" />
                </div>
                <div>
                    <div className="flex gap-2">
                        <h1 className="text-2xl font-bold">{shoppingName}</h1>
                        <button className="text-rose-500 bg-rose-100 p-1 rounded-lg">In Stock</button>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <div className="flex gap-1">
                            <IoStar className="text-2xl text-orange-500"></IoStar>
                            <IoStar className="text-2xl text-orange-500"></IoStar>
                            <IoStar className="text-2xl text-orange-500"></IoStar>
                            <IoStar className="text-2xl text-orange-500"></IoStar>
                            <IoStar className="text-2xl text-orange-500"></IoStar>
                        </div>
                        <p>{review} Review</p>
                    </div>
                    <div className="text-start mt-4">
                        <p className="text-2xl text-orange-500">$ {price}</p>
                    </div>
                    <hr className="w-full mt-4 " />
                    <p className="text-start mt-4"><span className="font-bold">Category:</span> {category}</p>
                    <p className="mt-4 text-start">{description}</p>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="join rounded-full border-2">
                            <button className="join-item text-xl btn">-</button>
                            <p className="join-item text-xl px-14 pr-10 pt-3">5</p>
                            <button className="join-item text-xl btn">+</button>
                        </div>
                        <Link to='/shopCart'>
                            <div className="relative w-full">
                                <button className="text-white bg-orange-500 w-full rounded-full text-center text-xl p-3">Checkout
                                </button>
                                <span className="absolute text-2xl right-7 text-white mt-4"><IoCheckmarkDoneSharp></IoCheckmarkDoneSharp></span>
                            </div>
                        </Link>
                        <div className="bg-base-300 rounded-full px-16 py-3 ">
                            <FiShoppingCart className="text-3xl w-16 text-center"></FiShoppingCart>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 mb-16">
                <h1 className="text-3xl font-bold text-start">Customer Feedback</h1>
                <div>
                    <div className="flex justify-between mt-5">
                        <div className="flex gap-3">
                            <div>
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co.com/p1hPPzT/female-avatar-no-face-hd-png.jpg" alt="" />
                            </div>
                            <div>
                                <h1 className="text-start text-xl">Showlin Akter</h1>
                                <div className="flex gap-1">
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                </div>
                            </div>
                        </div>
                        <p>2 min ago</p>
                    </div>
                    <p className="text-start mt-3">Duis at ullamcorper nulla, eu dictum eros</p>
                    <hr className="mt-3 w-full" />
                </div>
                <div>
                    <div className="flex justify-between mt-5">
                        <div className="flex gap-3">
                            <div>
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co.com/PFGSXyR/4-512.webp" alt="" />
                            </div>
                            <div>
                                <h1 className="text-start text-xl">Jane Cooper</h1>
                                <div className="flex gap-1">
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                </div>
                            </div>
                        </div>
                        <p>30 April 2021</p>
                    </div>
                    <p className="text-start mt-3">Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat,
                        some kind of shade may be helpful. Watch out for snails, as they will harm the plants.</p>
                    <hr className="mt-3 w-full" />
                </div>
                <div>
                    <div className="flex justify-between mt-5">
                        <div className="flex gap-3">
                            <div>
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co.com/RBC27wD/women-cartoon-avatar-in-flat-style-png-image-6110776.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-start text-xl">Sorna Akter</h1>
                                <div className="flex gap-1">
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                </div>
                            </div>
                        </div>
                        <p>2 min ago</p>
                    </div>
                    <p className="text-start mt-3"> Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.</p>
                    <hr className="mt-3 w-full" />
                </div>
                <div>
                    <div className="flex justify-between mt-5">
                        <div className="flex gap-3">
                            <div>
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co.com/MpW0Fbc/db1f9a3eaca4758faae5f83947fa807c.jpg" alt="" />
                            </div>
                            <div>
                                <h1 className="text-start text-xl">Shopnil Projapoti</h1>
                                <div className="flex gap-1">
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                    <IoStar className="text-2xl text-orange-500"></IoStar>
                                </div>
                            </div>
                        </div>
                        <p>2 min ago</p>
                    </div>
                    <p className="text-start mt-3">200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA                    </p>
                    <hr className="mt-3 w-full" />
                </div>
            </div>
        </div>
    );
};

export default ShoppingDetails;