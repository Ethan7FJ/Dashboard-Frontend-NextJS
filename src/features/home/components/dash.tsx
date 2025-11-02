import Link from "next/link";
import Image from "next/image";

export function Dash() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-center">
            <div className="col-span-1 md:col-span-5 flex justify-center">
                <h1 className="text-white text-5xl md:text-8xl font-embed text-shadow-md text-shadow-gray-500">
                    DASHBOARD
                </h1>
            </div>
            <div className="col-span-1 md:col-span-3 flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl m-5 text-white text-shadow-md text-shadow-gray-500 italic">Tecnologias Usadas</h3>
                <div className="flex m-10">
                    <Image src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" alt="" width={70} height={70} className="m-5 animate-bounce" />
{/*                     <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjj5cGK1z04lmp5vdMLhhwbsOF0eo_6r1nkimGyMxAkU2cw42Y2_wDyTFT8Ss2102qtU&usqp=CAU" alt="" width={70} height={70} className="rounded-4xl m-5 animate-bounce" />
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKGzgKHQA42GTo40DCQUnNVkUWd3FMzFJA&s" alt="" width={70} height={70} className="rounded-4xl m-5 animate-bounce" /> */}

                </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl m-5 text-white italic text-shadow-md text-shadow-gray-500">More</h3>
                <p className="text-white text-xl">Repositorio Backend: <Link className="text-white italic" target="_blank" rel="noopener noreferrer" href="#"> Click Here! </Link></p>
                <p className="text-white text-xl">Repositorio MicroServicios: <Link className="text-white  italic" target="_blank" rel="noopener noreferrer" href="#"> Click Here! </Link></p>
            </div>
        </div>
    )
}