import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";


const ShopingCart = ({ cart }) => {
    const { id, shoppingName, image, category, review, price, description } = cart;
    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <img className='relative h-[180px] w-full'
                    src={image}
                    alt="Image" />
                <Link to={`/shoppingCart/${id}`}>
                    <FiShoppingCart className="absolute top-3 right-4 text-3xl text-white p-2 rounded-full bg-orange-500"></FiShoppingCart>
                </Link>
            </figure>
            <div className="flex justify-between gap-2 mt-4">
                <div className='text-start'>
                    <h2 className="card-title">{shoppingName}</h2>
                    {
                        description.length > 30 ? <p className='text-start'>{description.slice(0, 30)}<Link
                            to={`/shoppingCart/${id}`}
                            className="font-bold">....</Link></p>
                            : <p>{description}</p>
                    }
                </div>
                <div>
                    <p className='text-xl font-bold pt-2'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ShopingCart;