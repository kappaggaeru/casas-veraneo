import { LucideIcon } from "lucide-react"

interface CardProps {
    title: string;
    icon: LucideIcon;
    text: string;
    color?: string;
}

export const ContactCard: React.FC<CardProps> = ({ title, icon: Icon, text, color }) => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-soft-gray rounded-lg">
            <div className="p-2 w-fit items-center bg-default-gray rounded-lg">
                <Icon className={`size-6 ${color ? color : 'text-sky-300'}`} />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-md font-medium">{title}</h1>
                <p className="text-sm font-light text-gray-400">{text}</p>
            </div>
        </div>
    )
}