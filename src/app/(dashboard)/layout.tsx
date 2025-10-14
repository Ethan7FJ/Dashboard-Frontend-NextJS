import { Providers } from "../Providers/providers";
import '../More/globals.css'


export default function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Providers>
                {children}
            </Providers>
        </div>
    );
}
