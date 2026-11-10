import { NavLink } from 'react-router';
import { Library } from 'lucide-react';
import { cn } from '@libs/utils';
import { APP_NAME } from '@libs/constants';
import { button } from '@libs/style';

const links = [
    { to: '/#functions', label: 'Fonctionnalites' },
    { to: '/#launch', label: 'Comment demarrer' },
    { to: '/e', label: 'Etablissements' }
];

const NavBar = () => (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/50 backdrop-blur">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
            <NavLink to="/" className="flex items-center gap-2 font-bold text-primary">
                <Library className="size-6" /> {APP_NAME}
            </NavLink>

            <div className="hidden items-center gap-8 text-muted md:flex">
                {links.map(({ to, label }) => (
                    <NavLink key={to} to={to} className="hover:text-accent">
                        {label}
                    </NavLink>
                ))}
            </div>

            <div className="flex items-center gap-6">
                <NavLink
                    to="/inscription"
                    className={cn(button, "bg-accent text-accent-foreground duration-500 hover:bg-accent/90")}
                >
                    Commencer
                </NavLink>
                <NavLink
                    to='/connexion'
                    className={cn(button, "hidden text-accent md:block md:border md:border-accent hover:text-foreground hover:bg-accent/10")}
                >
                    Connexion
                </NavLink>
            </div>
        </nav>
    </header>
);

export default NavBar;
