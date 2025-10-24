import { Providers } from "../Providers/providers";
import '../More/globals.css'


export default function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="">
            <Providers>
                {children}
            </Providers>
        </div>
    );
}
