import { NavLink } from 'react-router';
import {
    Building2,
    GraduationCap,
    Lock,
    Mail,
    MapPin
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FormField from '@components/ui/FormField';
import { cn } from '@libs/utils';
import { button, input } from '@libs/style';
import Mascot from '@components/Mascot';
import AuthLayout from '@components/layout/AuthLayout';

type Field = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    icon: LucideIcon;
    autoComplete: string;
};

const fields: Field[] = [
    { id: 'name', label: "Nom de l'etablissement", type: 'text', placeholder: 'Universite de Douala', icon: Building2, autoComplete: 'organization' },
    { id: 'city', label: 'Ville / quartier', type: 'text', placeholder: 'Douala, Bonaberi', icon: MapPin, autoComplete: 'address-levels' },
    { id: 'email', label: 'Email de contact', type: 'email', placeholder: 'contact@etablissement.cm', icon: Mail, autoComplete: 'off' },
    { id:'password', label: 'Mot de passe', type: 'password', placeholder: '8 caracteres minimum', icon: Lock, autoComplete: 'new-password' }
];

const RegistrationPage = () => (
    <AuthLayout
        title="Creer un compte"
        description="Premiere etape : creez le compte de votre etablissement."
        footer={
            <>
                Deja inscrit ?{" "}
                <NavLink
                    to="/connexion"
                    className="font-medium text-accent hover:underline"
                >
                    Se connecter
                </NavLink>
            </>
        }
    >
        <form className="mt-8 space-y-5">
            {/* Type of school */}
            <FormField label="Type d'etablissement" htmlFor="type" icon={GraduationCap}>
                <select id="type" name="type" defaultValue="" className={cn(input, "appearance-none")}>
                    <option value="" disabled>Choisir un type</option>
                    <option value="school">Ecole / College / Lycee</option>
                    <option value="university">Universite / Institut superieur</option>
                </select>
            </FormField>

            {/* field text generated from select-option */}
            {fields.map(({ id, label, type, placeholder, icon, autoComplete }) => (
                <FormField key={id} label={label} htmlFor={id} icon={icon}>
                    <input id={id} name={type} placeholder={placeholder} autoComplete={autoComplete} className={input} />
                </FormField>
            ))}

            {/* submit button full width */}
            <button type="submit" className={cn(button, "w-full justify-center bg-accent text-sm text-primary-foreground hover:bg-accent/90")}>
                Creer le compte de l'etalbissement
            </button>
        </form>
    </AuthLayout>
);

export default RegistrationPage;
