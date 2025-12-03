import { ActionButton } from "./buttons/action-button";

export default function AboutPreview() {
    return (
        <section className="flex flex-col gap-4 py-4">
            <h1 className="text-2xl">Casa Cala</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia rerum! Molestias impedit temporibus voluptatum vitae ducimus facilis quia, dignissimos ut placeat beatae, quas corrupti vero sequi harum est fuga.</p>
            <ActionButton text="Ver más" href="" />
        </section>
    )
}