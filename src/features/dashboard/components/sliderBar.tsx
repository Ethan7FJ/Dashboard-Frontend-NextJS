"use client";

import { ButtonUrlComponent } from "@/components/ui/buttonUrlComponent";
import { useRouter } from "next/navigation";

export function SliderBar() {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center m-10">
                <p className="text-white text-xl font-extralight opacity-50">Overview</p>
                <ButtonUrlComponent url="/inicio" title="Dashboard" />
                <ButtonUrlComponent url="/inventary" title="Inventary" />
                <ButtonUrlComponent url="/task" title="Task" />
                <ButtonUrlComponent url="/perfil" title="Perfil" />
            </div>
            <div className="text-center m-10">
                <p className="text-white text-xl font-extralight opacity-50">Settings</p>
                <button className=" cursor-pointer m-5 p-2 hover:shadow-sm hover:shadow-white rounded-lg duration-250 hover:bg-white text-white hover:text-black text-xl" 
                        onClick={()=>{
                            localStorage.removeItem('token');
                            router.push("/")
                        }}
                >Logout</button>
            </div>
        </div>
    )
}