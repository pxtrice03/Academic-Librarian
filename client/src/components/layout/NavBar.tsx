import { NavLink } from 'react-router';
import { Library } from 'lucide-react';
import { cn } from '@libs/utils';
import { APP_NAME } from '@libs/constants';
import { button } from '@libs/style';
import useAuthStore from '@stores/useAuthStore';

const links = [
    { to: '/#functions', label: 'Fonctionnalites' },
    { to: '/#launch', label: 'Comment demarrer' },
    { to: '/e', label: 'Etablissements' }
];

const NavBar = () => {
    const user = useAuthStore((s) => s.user);

    return (
        <header className="sticky top-0 z-50 bg-bg/50 backdrop-blur">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
                <NavLink to="/" className="flex items-center gap-2 font-bold text-primary text-2xl">
                    <Library className="size-7" /> {APP_NAME}
                </NavLink>

                <div className="hidden items-center gap-8 text-muted md:flex">
                    {links.map(({ to, label }) => (
                        <NavLink key={to} to={to} className="hover:text-accent">
                            {label}
                        </NavLink>
                    ))}
                </div>

                <div className="flex items-center gap-6">
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
                                className={cn(button, "bg-accent rounded-btn text-accent-foreground hover:bg-accent/85")}
                            >
                                Commencer
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
