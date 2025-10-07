import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="rounded-lg p-20 shadow-lg/40 shadow-cyan-700">
                <LoginForm />
            </div>
        </div>
    );
}
