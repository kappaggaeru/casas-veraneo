import { ActionButton } from "./buttons/action-button";

export default function AboutPreview() {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl">Casa Cala</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia rerum! Molestias impedit temporibus voluptatum vitae ducimus facilis quia, dignissimos ut placeat beatae, quas corrupti vero sequi harum est fuga.</p>
            <div className="mx-auto max-w-[1000px]">
                <ActionButton text="Ver más" href="" type="tertiary" />
            </div>
        </section>
    )
}