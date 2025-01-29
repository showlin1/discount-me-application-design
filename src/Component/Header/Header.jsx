import { MdHomeFilled } from "react-icons/md";
import './Header.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className="header-item h-[120px] bg-fixed">
                <div className="flex gap-2 hero-overlay bg-opacity-60 pt-10">
                    <Link to='/'>
                        <div className="text-white text-2xl ">
                            <MdHomeFilled></MdHomeFilled>
                        </div>
                    </Link>
                    <div className="text-xl text-white">
                        <a>{">"}</a>
                    </div>
                    <Link to='/signIn'>
                        <div className="text-base text-white">Sign In</div>
                    </Link>

                </div>
            </div>
        </div >
    );
};

export default Header;