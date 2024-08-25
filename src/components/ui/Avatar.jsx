// src/components/AvatarDropdown.js

import React, { useState } from 'react';

const AvatarDropdown = ({ image, placeholder = 'User', dropdownItems = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div 
                className="flex items-center cursor-pointer" 
                onClick={toggleDropdown}
            >
                <div className="w-[52px] h-[52px] rounded-full overflow-hidden border-4 border-primary bg-gray-200 flex items-center justify-center">
                    {image ? (
                        <img src={image} alt="Avatar" className="w-full h-full object-cover object-center" />
                    ) : (
                        <span className="text-gray-500">{placeholder}</span>
                    )}
                </div>
                <svg 
                    className="w-4 h-4 ml-2 text-gray-500"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="py-1">
                        {dropdownItems.length > 0 ? (
                            dropdownItems.map((item, index) => (
                                <button 
                                    key={index}
                                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                    onClick={item.onClick}
                                >
                                    {item.label}
                                </button>
                            ))
                        ) : (
                            <div className="px-4 py-2 text-gray-500">No actions available</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AvatarDropdown;
