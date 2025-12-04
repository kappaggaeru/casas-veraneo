"use client"

import React from "react";

type MenuButtonProps = {
    isOpen?: boolean;
}
export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen }) => {
    return (
        <div className="relative flex flex-col gap-2 justify-center items-center cursor-pointer p-6 bg-gray-200 rounded-full">
            <span className={`
                w-6 h-0.5 rounded-md bg-gray-600
                absolute
                transition-transform duration-300 origin-center 
                ${isOpen ? "-rotate-45" : "rotate-0 translate-y-1.5"}
            `}></span>
            <span className={`
                w-6 h-0.5 rounded-md bg-gray-600
                absolute
                transition-transform duration-300 origin-center
                ${isOpen ? "rotate-45" : "rotate-0 -translate-y-1.5"}
            `}></span>
        </div>
    )
}