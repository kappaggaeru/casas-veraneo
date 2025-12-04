"use client"

import React from "react";

type MenuButtonProps = {
    isOpen?: boolean;
    onClick?: () => void;
}
export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
    const [isClosed, setIsClosed] = React.useState(false);
    return (
        <div
            className="relative size-6 flex flex-col gap-2 justify-center items-center cursor-pointer p-6 active:bg-gray-100 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsClosed(!isClosed)}
        >
            <span className={`
                w-6 h-0.5 rounded-md bg-gray-500
                absolute
                transition-transform duration-300 origin-center 
                ${isClosed ? "rotate-45" : "rotate-0 translate-y-1"}
            `}></span>
            <span className={`
                w-6 h-0.5 rounded-md bg-gray-500
                absolute
                transition-transform duration-300 origin-center
                ${isClosed ? "-rotate-45" : "rotate-0 -translate-y-1"}
            `}></span>
        </div>
    )
}