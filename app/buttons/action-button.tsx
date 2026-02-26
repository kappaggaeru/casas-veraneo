import React from 'react';

interface ActionButtonProps {
    text: string;
    type: 'primary' | 'secondary' | 'tertiary';
    onClick?: () => void
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, type, onClick }) => {
    return (
        <>
            {type === 'primary' && (
                <button className="
                w-full bg-primary-500 p-4 shadow-lg rounded-xl text-white
                cursor-pointer font-medium text-foreground
                transition-colors duration-300
                hover:bg-secondary-500 hover:text-primary-500"
                    onClick={onClick}>
                    {text}
                </button>
            )}
            {type === 'secondary' && (
                <button className="
                    w-full bg-white py-4 rounded-xl text-primary-1200
                    cursor-pointer font-medium text-foreground text-center inline-block
                    border border-[#e5e5e5] transition-all duration-300
                    hover:bg-primary-500 hover:text-white hover:border-primary-700
                    "
                    onClick={onClick}>
                    {text}
                </button>
            )}
            {type === 'tertiary' && (
                <button className="
                    w-fit cursor-pointer font-medium text-white text-center inline-block"
                    onClick={onClick}>
                    {text}
                </button>
            )}
        </>
    );
}