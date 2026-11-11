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
import Mascot from '@components/Mascot';

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
                {/* HERO: text on the left, mascot on the right (stacked on mobile) */}
                <section className="border-b border-line">
                    <div className="max-w-6xl mx-auto grid items-center gap-12 px-6 py-10 md:grid-cols-2 md:py-30">
                        <div className="text-center md:text-left">
                            <span data-reveal className="hidden rounded-full bg-accent/30 border-2 border-accent px-4 py-1 text-xs font-medium text-muted-foreground md:inline-block">
                                Pour les établissements scolaires et universitaires de Douala
                            </span>
                            <h1 data-reveal style={{ transitionDelay: "200ms" }} className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-balance md:text-5xl">
                                Gerez votre bibliotheque en ligne, <span className="text-accent">gratuitement</span>
                            </h1>
                            <p data-reveal style={{ transitionDelay: "300ms" }} className="mt-6 max-w-2xl text-muted-foreground">
                                Catalogue, pret, retours et lecteurs - tout votre systeme de bibliotheque reuni en un seul endroit, accessible partout.
                            </p>
                            {/* centered on mobile, left-aligned on desktop */}
                            <div data-reveal style={{ transitionDelay: "400ms" }} className="mt-8 flex flex-wrap justify-center gap-6 md:justify-start">
                                <NavLink to="/inscription" className={cn(button, "bg-accent rounded-btn text-primary-foreground hover:bg-accent/85")}>
                                    Creer un compte <ArrowRight className="size-4" />
                                </NavLink>
                                <NavLink to="/#functions" className={cn(button, "border border-line bg-card rounded-btn hover:text-primary hover:bg-muted/5")}>
                                    Découvrir comment ca marche
                                </NavLink>
                            </div>
                        </div>

                        {/* mascot: waving, revealed on scroll */}
                        <div data-reveal style={{ transitionDelay: "200ms" }} className="mx-auto w-64 md:w-full md:max-w-sm">
                            <Mascot pose="wave" className="w-full" />
                        </div>
                    </div>
                </section>

                {/* Functionalities */}
                <section id="functions" className="bg-sec py-10 border-b border-line md:py-24">
                    <div className="max-w-6xl mx-auto px-6 md:px-0">
                        <h2 data-reveal className="text-center font-bold text-4xl md:text-5xl">Ce que fait la platefrome</h2>
                        {/* Features grid */}
                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map(({ icon: Icon, title, text }, i) => (
                                <article
                                    key={title}
                                    data-reveal
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                    className="border border-line bg-card rounded-card p-6"
                                >
                                    <Icon className="size-8 text-center text-accent" />
                                    <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
                                    <p className="mt-2 text-muted-foreground">{text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Steps to launch app */}
                <section id="launch" className="border-b border-line px-6 py-10 md:py-24">
                    <div className="max-w-6xl mx-auto">
                        <h2 data-reveal className="text-center text-4xl font-bold md:text-5xl">Demarrer dans votre etablissement</h2>
                        <p data-reveal className="max-w-xl mx-auto mt-4 text-center text-muted-foreground">
                            Quatre etapes, dans cet ordre : l'etablissement et ses livres d'abord , le reste ensuite.
                        </p>

                        <ol className="mt-14 grid gap-6 md:grid-cols-2">
                            {steps.map(({ icon: Icon, title, text}, i) => (
                                <li
                                    key={title}
                                    data-reveal
                                    style={{ transitionDelay: `${(i % 2) * 100}ms` }}
                                    className="flex gap-4 border border-line bg-card rounded-card p-6"
                                >
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-primary-foreground">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <h2 className="flex items-center gap-2 font-semibold text-2xl mb-3">
                                            {title} <Icon className="size-5 text-accent" />
                                        </h2>
                                        <p className="mt-1">{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 bg-sec">
                    <div className="max-w-4xl mx-auto">
                        <div data-reveal className="rounded-lg py-16 text-center text-primary-foreground">
                            <h2 className="text-3xl mb-3 font-bold md:text-5xl">Pret a numerique votre bibliotheque ?</h2>
                            <p className=" mt-1">
                                L'inscription de votre etablissement prend quelques minutes.
                            </p>
                            <NavLink to="/inscription" className={cn(button, "rounded-btn my-3 bg-accent text-accent-foreground hover:bg-accent/90")}>
                                Creer un compte <ArrowRight className="size-4" />
                            </NavLink>
                        </div>
                    </div>
                </section>
            </main>

            <Footer mascot={Mascot} />
        </div>
    );
}

export default Home;
