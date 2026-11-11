import { NavLink } from "react-router";
import { ArrowLeft } from "lucide-react";
import Mascot from "@components/Mascot";
import { cn } from "@libs/utils";
import { button } from "@libs/style";

const NotFoundPage = () => (
    <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            <Mascot pose="lost" className="w-56" />
            {/* big error code in amber */}
            <p className="mt-6 text-5xl font-bold text-accent">404</p>
            <h1 className="mt-2 text-2xl font-bold">Oups, cette page est introuvable</h1>
            <p className="mt-2 max-w-md text-muted-foreground">
                La page que vous cherchez n'existe pas ou a ete deplacee. Même notre bibliothecaire s'est perdu.
            </p>
            <NavLink to="/" className={cn(button, "rounded-btn mt-8 bg-accent text-primary-foreground hover:bg-accent/90")}>
                <ArrowLeft className="size-4" /> Retour a l'accueil
            </NavLink>
        </main>
    </div>
);

export default NotFoundPage;
