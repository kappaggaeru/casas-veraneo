"use client"
import React from "react";
import { ActionButton } from "./buttons/action-button";

export default function AboutPreview() {
    const [seeMoreVisible, setSeeMoreVisible] = React.useState(false)
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl">Casa Cala</h2>
            <div className="flex flex-col gap-4 text-gray-500">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia rerum! Molestias impedit temporibus voluptatum vitae ducimus facilis quia, dignissimos ut placeat beatae, quas corrupti vero sequi harum est fuga.</p>
                <div className={`flex flex-col gap-4 ${seeMoreVisible ? "block" : "hidden"}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia rerum! Molestias impedit temporibus voluptatum vitae ducimus facilis quia, dignissimos ut placeat beatae, quas corrupti vero sequi harum est fuga.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia rerum! Molestias impedit temporibus voluptatum vitae ducimus facilis quia, dignissimos ut placeat beatae, quas corrupti vero sequi harum est fuga.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia rerum! Molestias impedit temporibus voluptatum vitae ducimus facilis quia, dignissimos ut placeat beatae, quas corrupti vero sequi harum est fuga.</p>
                </div>
            </div>
            <div className="mx-auto max-w-[1000px]">
                <ActionButton
                    text={seeMoreVisible ? "Ocultar" : "Ver más"}
                    type="tertiary"
                    onClick={() => {setSeeMoreVisible(!seeMoreVisible)}}
                />
            </div>
        </section>
    )
}