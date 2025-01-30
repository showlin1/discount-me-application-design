

const CouponCard = () => {
    return (
        <div className="pt-24">
            <h1 className="text-start text-4xl font-bold mb-10">Coupon Cards</h1>
            <div className="h-[300px] rounded-xl shadow-xl ">
                <div className="flex w-full gap-10">
                    <div className="flex justify-between w-1/2">
                        <div className="pt-24 flex justify-between w-96">
                            <p className="p-12 pl-0 rounded-r-full  bg-base-200 h-[24px] w-[4px]"></p>
                            <div>
                                <h1 className="text-6xl text-green-500 text-start">Price</h1>
                                <h1 className="text-6xl text-orange-500  text-start">$10.99</h1>
                            </div>
                        </div>
                        <div className="border-l-8 border-dotted border-gray-100 h-[300px]"></div>
                    </div>
                    <div className="pt-24 flex justify-between text-start w-1/2">
                        <div>
                            <h1 className="text-start text-5xl font-bold">Single Discount</h1>
                            <p className="mt-4 text-xl">Customer takes 6 discount</p>
                        </div>
                        <p className="p-12 rounded-l-full pr-0  bg-base-200 h-[24px] w-[4px]"></p>
                    </div>
                </div>
            </div>
            <div className="h-[300px] rounded-xl shadow-xl mt-14 mb-16">
                <div className="flex w-full gap-10">
                    <div className="flex justify-between w-1/2">
                        <div className="pt-24 flex justify-between w-96">
                            <p className="p-12 pl-0 rounded-r-full  bg-base-200 h-[24px] w-[4px]"></p>
                            <div>
                                <h1 className="text-6xl text-green-500 text-start">Price</h1>
                                <h1 className="text-6xl text-orange-500  text-start">$34.99</h1>
                            </div>
                        </div>
                        <div className="border-l-8 border-dotted border-gray-100 h-[300px]"></div>
                    </div>
                    <div className="pt-24 flex justify-between text-start w-1/2">
                        <div>
                            <h1 className="text-start text-5xl font-bold">Unlimited Discount</h1>
                            <p className="mt-4 text-xl">Customer get unlimited discount in one month</p>
                        </div>
                        <p className="p-12 rounded-l-full pr-0  bg-base-200 h-[24px] w-[4px]"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;