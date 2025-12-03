interface ActionButtonProps {
    text: string;
    href: string;
}
export const ActionButton: React.FC<ActionButtonProps> = ({ text, href }) => {
    return (
        <button className="
            w-full bg-primary-600 py-4 shadow-lg rounded-xl
            cursor-pointer font-medium text-foreground
            hover:bg-primary-500">
            {text}
        </button>
    )
}