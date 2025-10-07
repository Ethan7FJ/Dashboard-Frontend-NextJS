import { Navegador } from "@/components/layout/Navbar";
import { AcerDe } from "@/features/home/components/acercade";

export default function AboutPage() {

    return (
        <div>
            <header>
                <Navegador />
            </header>
            <main className="flex-1 m-3 p-5 rounded-xl h-screen">
                <AcerDe />
            </main>
            <footer className="w-full h-16 bg-cyan-950/40 shadow-inner flex items-center justify-center p-3">
            </footer>
        </div>
    );
}
