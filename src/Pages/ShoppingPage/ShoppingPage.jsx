import { useLoaderData } from "react-router-dom";
import ShopingCart from "../ShopCart/ShopingCart";
import Categories from "../../Component/Categories/Categories";


const ShoppingPage = () => {
    const shoppingCarts = useLoaderData();
    return (
        <div className="pt-24">
            <Categories></Categories>
            <div className="grid grid-cols-3 gap-3 mb-16 mt-10">
                {
                    shoppingCarts.map(cart => <ShopingCart key={cart.id} cart={cart}></ShopingCart>)
                }
            </div>
        </div>
    );
};

export default ShoppingPage;