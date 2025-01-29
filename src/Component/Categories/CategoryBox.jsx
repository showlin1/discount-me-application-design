import React from 'react';

const CategoryBox = ({ label, icon: Icon }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-3 p-2 w-[80px] h-[80px] shadow-xl rounded-lg
        hover:text-neutral-800 transition cursor-pointer`}>
            <Icon size={26} />
            <div className='text-sm font-medium'>{label}</div>
        </div>
    );
};

export default CategoryBox;