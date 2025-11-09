import { useUser } from "@/components/layout/protectRouter"

export function Greeting() {

    const user = useUser();

    return (
        <div className="bg-gray-900 shadow-md py-4 px-6 flex flex-col items-center justify-center rounded-br-[30%] rounded-bl-[30%] sm:rounded-br-[45%] sm:rounded-bl-[45%]">
            <h2 className="text-white text-xl font-cormorant">!Bienvienido a tu Dashboard¡</h2>
            <h1 className="text-white text-3xl font-cormorant">{user?.usuario?.nombre ?? "Usuario"}</h1>
        </div>
    )
}