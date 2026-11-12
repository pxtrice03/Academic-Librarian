import { NavLink } from 'react-router';
import { Library, Menu, X } from 'lucide-react';
import { cn } from '@libs/utils';
import { APP_NAME } from '@libs/constants';
import { button } from '@libs/style';
import useAuthStore from '@stores/useAuthStore';
import { useState } from 'react';

const links = [
    { to: '/#functions', label: 'Fonctionnalites' },
    { to: '/#launch', label: 'Comment demarrer' },
    { to: '/e', label: 'Etablissements' }
];

const NavBar = () => {
    const user = useAuthStore((s) => s.user);
    const [isOpen, setisOpen] = useState(false);
    const closeMenu = () => setisOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-bg/50 backdrop-blur">
            <nav className="max-w-6xl mx-auto px-6 py-2">
                <div className="flex items-center justify-between">
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-2 font-bold text-primary text-lg md:text-2xl"
                    >
                        <Library className="size-7" /> {APP_NAME}
                    </NavLink>

                    {/* Desktop nav */}
                    <div className="hidden items-center gap-8 text-muted lg:flex">
                        {links.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className="transition-colors duration-500 hover:text-accent"
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop auth */}
                    <div className="hidden lg:flex items-center gap-6">
                        {user ? (
                            <NavLink
                                to={use.slug ? `/e/${user.slug}` : "/e"}
                                className={cn(button, "bg-accent text-accent-foreground duration-500  hover:bg-accent/85")}
                            >
                                Mon espace
                            </NavLink>
                        ) : (
                            <>
                                <NavLink
                                    to='/connexion'
                                    className={cn(button, "hidden rounded-btn text-muted md:block md:border md:border-line hover:text-primary hover:bg-muted/5")}
                                >
                                    Connexion
                                </NavLink>
                                <NavLink
                                    to="/inscription"
                                    className={cn(button, "bg-accent rounded-btn text-accent-foreground hover:bg-accent/85 hover:text-primary")}
                                >
                                    Commencer
                                </NavLink>
                            </>
                        )}
                    </div>

                    {/* Mobile toggle btn */}
                    <button
                        type="button"
                        onClick={() => setisOpen(!isOpen)}
                        className="lg:hidden p-2 text-primary "
                        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={isOpen}
                    >
                    {isOpen ? (
                        <X size={26} />
                    ) : (
                        <Menu size={26} />
                    )}
                    </button>
                </div>

                {/* Mobile nav */}
                {isOpen && (
                    <div className="lg:hidden flex flex-col gap-6 pt-6 pb-4">
                        {/* Navigation links */}
                        <div className="flex flex-col gap-5 text-muted">
                            {links.map(({ to, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={closeMenu}
                                    className="hover:text-accent"
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Authentication */}
                        <div className="flex flex-col gap-3">
                            {user ? (
                                <NavLink
                                    to={user.slug ? `/e/${user.slug}` : "/e"}
                                    onClick={cn(button, "bg-accent text-accent-foreground text-center")}
                                >
                                    Mon espace
                                </NavLink>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <NavLink
                                        to="/connexion"
                                        onClick={closeMenu}
                                        className={cn(button, "rounded-btn border border-line")}
                                    >
                                        Connexion
                                    </NavLink>

                                    <NavLink
                                        to="/inscription"
                                        onClick={closeMenu}
                                        className={cn(button, "rounded-btn bg-accent text-accent-foreground")}
                                    >
                                        Commencer
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default NavBar;
