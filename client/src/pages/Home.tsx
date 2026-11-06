import type { LucideIcon } from 'lucide-react';
import {
    ArrowRight,
    BookOpen,
    BookPlus,
    Building2,
    CalendarClock,
    History,
    Rocket,
    ShieldCheck,
    Users,
} from 'lucide-react';
import { cn } from '@libs/utils';
import useLenis from '@hooks/useLenis';
import useReveal from '@hooks/useReveal';
import NavBar from '@components/layout/NavBar';
import { button } from '@libs/style';
import Footer from '@components/layout/Footer';
import { NavLink } from 'react-router';

type Item = {
    icon: LucideIcon;
    title: string;
    text: string;
};

const features: Item[] = [
    {
        icon: BookOpen,
        title: "Catalogue en ligne",
        text: "Vos livres sont consultables par tous vos lecteurs, 24/24."
    },
    {
        icon: CalendarClock,
        title: "Emprunts & reservations",
        text: "Empruntez, rendez ou reservez un livre deja pris, en quelques clics."
    },
    {
        icon: History,
        title: "Historique complet",
        text: "Chaque lecteur et chaque bibliotheque suit ses mouvements de livres."
    },
    {
        icon: ShieldCheck,
        title: "Espace administrateur",
        text: "Une platefrome separee pour superviser et gerer l'ensemble."
    }
];

// steps to launch app
const steps: Item[] = [
    {
        icon: Building2,
        title: "Enregistrez vous etablissement",
        text: "Creez le compte de votre ecole ou universite avec son nom et ses contacts."
    },
    {
        icon: BookPlus,
        title: "Publiez vous livres",
        text: "Ajoutez les livres de votre bibliotheque : titre, auteur, exemplaires."
    },
    {
        icon: Users,
        title: "Invitez vous lecteurs",
        text: "Etudiants et enseignements creent leur compte et rejoignent votre espace."
    },
    {
        icon: Rocket,
        title: "Gerer au quotidien",
        text: "Suivez les emprunts, retours, reservations et l'historique."
    }
];

const Home = () => {
    useLenis();
    useReveal();

    return (
        <div className="min-h-screen">
            {/* Nav */}
            <NavBar />

            {/* MAIN SECTION */}
            <main id="top">
                {/* Hero */}
                <section className="px-6 py-8 text-center border-b border-line md:py-30">
                    <div className="max-w-6xl mx-auto">
                        <span data-reveal className="hidden rounded-full bg-accent/30 border-2 border-accent px-4 py-1 text-sm font-medium text-muted-foreground md:inline-block">
                            Pour les etablissements scolaires et universitaires de Douala
                        </span>

                        <h1 data-reveal style={{ transitionDelay: "100ms" }} className="mt-6 text-xl font-bold leading-tight text-balance md:text-6xl">
                            La bibliotheque de votre etablissement, <span className="text-accent">en ligne</span>
                        </h1>

                        <p data-reveal style={{ transitionDelay: "200ms" }} className="mt-4 text-muted-foreground">
                            Publiez vos livres, ouvrez l'access a vos lecteurs et suivez chaque emprunt, retour et reservation au meme endroit.
                        </p>

                        {/* CTA */}
                        <div data-reveal style={{ transitionDelay: "300ms" }} className="mt-10 flex flex-wrap justify-center gap-4">
                            <NavLink to="/inscription" className={cn(button, "bg-accent text-primary-foreground hover:bg-accent/90")}>
                                Enregister mon etablissement <ArrowRight className="size-4" />
                            </NavLink>
                            <NavLink to="#fonctions" className={cn(button, "border border-line bg-card hover:bg-muted/5")}>
                                Decouvrir
                            </NavLink>
                        </div>
                    </div>
                </section>

                {/* Functionalities */}
                <section id="functions" className="bg-sec py-10 border-b border-line md:py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 data-reveal className="text-center text-3xl font-bold">Ce que fait la platefrome</h2>
                        {/* Features grid */}
                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map(({ icon: Icon, title, text }, i) => (
                                <article
                                    key={title}
                                    data-reveal
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                    className="border border-line bg-card p-6"
                                >
                                    <Icon className="size-8 text-center" />
                                    <h3 className="mt-4 font-semibold">{title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Steps to launch app */}
                <section id="launch" className="border-b border-line px-6 py-10 md:py-24">
                    <div className="max-w-6xl mx-auto">
                        <h2 data-reveal className="text-center text-3xl font-bold">Demarrer dans votre etablissement</h2>
                        <p data-reveal className="max-w-xl mx-auto mt-4 text-center text-muted-foreground">
                            Quatre etapes, dans cet ordre : l'etablissement et ses livres d'abord , le reste ensuite.
                        </p>

                        <ol className="mt-14 grid gap-6 md:grid-cols-2">
                            {steps.map(({ icon: Icon, title, text}, i) => (
                                <li
                                    key={title}
                                    data-reveal
                                    style={{ transitionDelay: `${(i % 2) * 100}ms` }}
                                    className="flex gap-4 border border-line bg-card p-6"
                                >
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-primary-foreground">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <h3 className="flex items-center gap-2 font-semibold">
                                            {title} <Icon className="size-4 text-accent" />
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6">
                    <div className="max-w-4xl mx-auto">
                        <div data-reveal className="rounded-lg bg-sec py-16 text-center text-primary-foreground">
                            <h2 className="text-3xl font-bold">Pret a numerique votre bibliotheque ?</h2>
                            <p className="opacity-80">
                                L'inscription de votre etablissement prend quelques minutes.
                            </p>
                            <NavLink to="/inscription" className={cn(button, "mt-8 bg-accent text-accent-foreground hover:bg-accent/90")}>
                                Enregistrer mon établissement <ArrowRight className="size-4" />
                            </NavLink>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
