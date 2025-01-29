import { MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";


const PrivacyPolicy = () => {
    return (
        <div className="pt-24">
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
                    <div className="text-base text-orange-600">Privacy Policy</div>
                </div>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl text-start font-bold mb-4">Privacy Policy</h1>
                <p className="text-start">Welcome to [Your Company Name]. Before using our logo design service, please carefully review the following Terms and Conditions,
                    as they govern the contractual relationship between you (the "Client") and [Your Company Name] (the "Service Provider").
                    By using our logo design service, you acknowledge that you have read,
                    understood, and agreed to these Terms and Conditions in their entirety.</p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl text-start font-bold mb-4">→ Scope of Service</h1>
                <p className="text-start">a. [Your Company Name] will provide custom logo design services to the Client
                    based on the specifications provided by the Client.</p>
                <p className="text-start mt-4">b. The Service Provider will deliver the final logo design in the agreed-upon
                    format upon completion and full payment of the service fee.</p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl text-start font-bold mb-4">→ Copyright and Ownership</h1>
                <p className="text-start">a. The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client
                    after full payment has been received by the Service Provider.</p>
                <p className="text-start mt-4">b. Final payment ensures that only the agreed design becomes the client’s property. Any previous ideas/concepts remain
                    the property of The Service Provider, unless any prior agreement has been made.</p>
                <p className="text-start mt-4">c. The Service Provider reserves the right to showcase the completed logo design in their portfolio or promotional materials.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;