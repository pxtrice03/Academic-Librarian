import type { ReactNode } from 'react';
import NavBar from '@components/layout/NavBar';
import Footer from '@components/layout/Footer';
import Mascot from '@components/Mascot';

type AuthLayoutProps = {
    title: string; // cart title
    description: string; // intro line
    children: ReactNode; // form
    footer: ReactNode; // link (like "Have ab account?")
};

const AuthLayout = ({
    title,
    description,
    children,
    footer
}: AuthLayoutProps) => (
    <div className="min-h-screen flex flex-col">
        <NavBar />

        <main className="flex flex-1 items-center justify-center px-6 py-16">
            {/* form cart */}
            <div className="w-full max-w-lg border border-line bg-card p-8 shadow-sm">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>

                {/* form */}
                <div className="mt-8">{children}</div>

                {/* alternative link under form */}
                <p className="mt-6 text-center text-sm text-muted-foreground">{footer}</p>
            </div>
        </main>

        <Footer mascot={Mascot} />
    </div>
);

export default AuthLayout;
