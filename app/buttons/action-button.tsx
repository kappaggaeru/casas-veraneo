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
                w-full bg-primary-1200 p-4 shadow-lg rounded-xl text-white
                cursor-pointer font-medium text-foreground
                hover:bg-primary-1100"
                    onClick={onClick}>
                    {text}
                </button>
            )}
            {type === 'secondary' && (
                <button className="
                    w-full bg-secondary-200 py-4 shadow-lg rounded-xl
                    cursor-pointer font-medium text-foreground text-center inline-block
                    hover:bg-secondary-300"
                    onClick={onClick}>
                    {text}
                </button>
            )}
            {type === 'tertiary' && (
                <button className="
                    w-fit cursor-pointer font-medium text-primary-1200 text-center inline-block"
                    onClick={onClick}>
                    {text}
                </button>
            )}
        </>
    );
}