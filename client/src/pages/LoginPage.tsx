import { NavLink } from 'react-router';
import { Lock, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import AuthLayout from '@components/layout/AuthLayout';
import FormField from '@components/ui/FormField';
import { cn } from '@libs/utils';
import { button, input } from '@libs/style';

type Field = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    icon: LucideIcon;
    autoComplete: string;
};

// connection fields : rendered by map
const fields: Field[] = [
    { id: 'email', label: 'Adresse email', type: 'email', placeholder: 'vous@exemple.cm', icon: Mail, autoComplete: 'email' },
    { id: 'password', label: 'Mot de passe', type: 'password', placeholder: 'Votre mot de passe', icon: Lock, autoComplete: 'current-password' }
];

// connection page for schools and lecturers
const LoginPage = () => (
    <AuthLayout
        title="Connexion"
        description="Acceder a votre espace pour consulter, emprunter ou gerer vos livres."
        footer={
            <>
                Pas encore de compte ?{" "}
                <NavLink
                    to="/inscription"
                    className="font-medium text-accent hover:underline"
                >
                    Enregister mon etablissement
                </NavLink>
            </>
        }
    >
        <form className="space-y-5">
            {fields.map(({ id, label, type, placeholder, icon, autoComplete }) => (
                <FormField key={id} label={label} htmlFor={id} icon={icon}>
                    <input id={id} name={id} type={type} placeholder={placeholder} autoComplete={autoComplete} className={input} />
                </FormField>
            ))}

            <button type="submit" className={cn(button, "w-full justify-center bg-accent text-accent-foreground hover:bg-accent/90")}>
                Se connecter
            </button>
        </form>
    </AuthLayout>
);

export default LoginPage;
