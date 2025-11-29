import Image from "next/image";
import Link from "next/link";

export function Dash() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-5 gap-6 items-start bg-black rounded-2xl">
            <div className="col-span-1 md:col-span-5 flex justify-center items-center">
                <h1 className="text-white text-5xl md:text-8xl font-embed tracking-widest uppercase drop-shadow-2xl">
                    DASHBOARD
                </h1>
            </div>
            <div className="col-span-1 md:col-span-3 flex flex-col items-center p-4 md:p-6">
                <h3 className="text-2xl md:text-3xl my-4 text-white italic drop-shadow-md">Tecnologías Usadas</h3>
                <div className="flex gap-6 items-center justify-center py-4">
                    <Image src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" alt="Next.js" width={70} height={70} className="rounded-xl" />
                    {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjj5cGK1z04lmp5vdMLhhwbsOF0eo_6r1nkimGyMxAkU2cw42Y2_wDyTFT8Ss2102qtU&usqp=CAU" alt="Tecnologia 2" width={70} height={70} className="rounded-4xl" /> */}
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col items-center p-4 md:p-6">
                <h3 className="text-2xl md:text-3xl my-4 text-white italic drop-shadow-md">More</h3>
                <p className="text-white text-xl text-center">Repositorio Backend: <Link className="text-blue-300 hover:text-blue-100 transition underline" target="_blank" rel="noopener noreferrer" href="#">Click Here!</Link></p>
                <p className="text-white text-xl text-center mt-2">Repositorio MicroServicios: <Link className="text-blue-300 hover:text-blue-100 transition underline" target="_blank" rel="noopener noreferrer" href="#">Click Here!</Link></p>
            </div>
        </div>
    )
}
