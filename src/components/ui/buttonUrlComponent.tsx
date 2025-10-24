import Link from "next/link";
import { ButtonUrl } from "../types/componentesTypes";

export function ButtonUrlComponent({ url, title }: ButtonUrl)
{
    return(
        <div className="m-5">
            <Link href={url} className="p-2 hover:shadow-sm hover:shadow-white rounded-lg duration-250 hover:bg-white text-white hover:text-black text-xl">{title}</Link>
        </div>
    )
}