import { Providers } from "../Providers/providers";
import '../More/globals.css'


export default function HomeLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
      <Providers>
        {children}
      </Providers>
    </div>
  );
}
