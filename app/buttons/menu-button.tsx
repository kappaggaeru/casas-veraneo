"use client"

import React from "react";

type MenuButtonProps = {
    isOpen?: boolean;
}
export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen }) => {
    return (
        <div className="
            relative flex flex-col gap-2 justify-center items-center
            cursor-pointer p-6 rounded-lg hover:bg-gray-300 active:bg-gray-300
            transition-colors duration-300
        ">
            <span className={`
                w-6 h-0.5 rounded-md
                absolute bg-gray-600
                transition-all duration-300 origin-center
                ${isOpen ? "-rotate-45" : " rotate-0 translate-y-1.5"}
            `}></span>
            <span className={`
                w-6 h-0.5 rounded-md
                absolute bg-gray-600
                transition-all duration-300 origin-center
                ${isOpen ? "rotate-45" : "rotate-0 -translate-y-1.5"}
            `}></span>
        </div>
    )
}