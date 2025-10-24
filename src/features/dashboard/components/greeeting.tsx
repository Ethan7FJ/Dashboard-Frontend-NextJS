export function Greeting({data}:any){
    return(
        <div className="bg-black shadow-md py-4 px-6 flex flex-col items-center justify-center rounded-br-[30%] rounded-bl-[30%] sm:rounded-br-[45%] sm:rounded-bl-[45%]">
            <h2 className="text-white text-xl font-cormorant">!Bienvienido a tu Dashboard¡</h2>
            <h1 className="text-white text-3xl font-cormorant">{data?.usuario?.nombre}</h1>
        </div>
    )
}