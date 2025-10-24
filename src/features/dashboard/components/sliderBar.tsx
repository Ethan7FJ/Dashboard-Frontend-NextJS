"use client";

import { ButtonUrlComponent } from "@/components/ui/buttonUrlComponent";

export function SliderBar() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center m-10">
                <p className="text-white text-xl font-extralight opacity-50">Overview</p>
                <ButtonUrlComponent url="/inicio" title="Dashboard" />
                <ButtonUrlComponent url="#" title="Inventary" />
                <ButtonUrlComponent url="#" title="Task" />
                <ButtonUrlComponent url="#" title="Perfil" />
            </div>
            <div className="text-center m-10">
                <p className="text-white text-xl font-extralight opacity-50">Settings</p>
                <ButtonUrlComponent url="#" title="Logout" />
            </div>
        </div>
    )
}