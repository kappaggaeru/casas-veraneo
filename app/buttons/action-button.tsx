import React from 'react';

interface ActionButtonProps {
    text: string;
    href?: string;
    type: 'primary' | 'secondary' | 'tertiary';
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, href, type }) => {
    return (
        <>
            {type === 'primary' && (
                <button className="
                w-full bg-primary-600 py-4 shadow-lg rounded-xl
                cursor-pointer font-medium text-foreground
                hover:bg-primary-500">
                    {text}
                </button>
            )}
            {type === 'secondary' && (
                <button className="
                    w-full bg-secondary-200 py-4 shadow-lg rounded-xl
                    cursor-pointer font-medium text-foreground text-center inline-block
                    hover:bg-secondary-300">
                    {text}
                </button>
            )}
            {type === 'tertiary' && (
                <button className="
                    w-fit cursor-pointer font-medium text-primary-500 text-center inline-block">
                    {text}
                </button>
            )}
        </>
    );
}