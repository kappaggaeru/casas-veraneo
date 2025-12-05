import { LucideIcon } from "lucide-react"

interface CardProps {
    title: string;
    icon: LucideIcon;
    description: string;
    color?: string;
}

export const InfoCard: React.FC<CardProps> = ({ title, icon: Icon, description, color }) => {
    return (
        <article className="bg-muted-bg shadow-sm p-4 rounded-xl ">
            <div className="py-6">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg bg-primary-200">
                        <Icon className={`h-8 w-8 ${color ? color : "text-primary-1200"}`} />
                    </div>
                    <h3 className="font-semibold mb-2 text-balance">{title}</h3>
                    <p className="text-sm text-muted-foreground text-gray-600">{description}</p>
                </div>
            </div>
        </article>
    )
}