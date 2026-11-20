import {
    BookCopy,
    Building2,
    CalendarDays,
    Clock,
    Mail,
    MapPin
} from "lucide-react";
import PageHeader from "@components/layout/PageHeader";
import FormField from "@components/ui/FormField";
import { cn } from "@libs/utils";
import { input } from "@libs/style";
import { Button } from "@components/ui/Button";
import type { FieldConfig } from "@types/form";

const sections: { title: string; description: string; submit: string; fields: FieldConfig[] }[] = [
    {
        title: "Informations de l'etablissement",
        description: "Ces informations sont visibles dans  l'annuaire des etablissements.",
        submit: "Enregister les informations",
        fields: [
            { id: "name", label: "Nom de l'etablissement", type: "text", icon: Building2, defaultValue: "Lycée Bilingue de Bonabéri" },
            { id: "city", label: "Ville / quartier", type: "text", icon: MapPin, defaultValue: "Douala, Bonabéri" },
            { id: "email", label: "Email de contact", type: "email", icon: Mail, defaultValue: "contact@exemple.cm" }
        ]
    },
    {
        title: "Règles de prêt",
        description: "Ces règles s'appliquent à tous les lecteurs de l'établissement.",
        submit: "Enregistrer les règles",
        fields: [
            { id: "loanDays", label: "Durée d'un emprunt (jours)", type: "number", icon: CalendarDays, defaultValue: 14, min: 1 },
            { id: "maxBooks", label: "Livres maximum par lecteur", type: "number", icon: BookCopy, defaultValue: 3, min: 1 },
            { id: "reservationDays", label: "Durée de conservation d'une réservation (jours)", type: "number", icon: Clock, defaultValue: 3, min: 1 }
        ],
    }
];

// Settings page
// returns the page /e/:slug/parametres
const SettingsPage = () => {
    return (
        <div>
            <PageHeader title="Parametres" description="Configurez votre établissement et vos règles de prêt." />

            <div className="mt-8 max-w-2xl space-y-8">
                {sections.map(({ title, description, submit, fields }) => (
                    <form key={title} className="rounded-card border border-line bg-card p-6">
                        <h2 className="text-lg font-semibold md:text-2xl">{title}</h2>
                        <p className="mt-1 text-sm text-muted-foreground">{description}</p>

                        {/* champs générés depuis la configuration */}
                        <div className="my-6 space-y-4">
                            {fields.map(({ id, label, type, icon, defaultValue, min }) => (
                                <FormField key={id} label={label} htmlFor={id} icon={icon}>
                                    <input id={id} name={id} type={type} defaultValue={defaultValue} min={min} className={input} />
                                </FormField>
                            ))}
                        </div>

                        <Button type="submit">
                            {submit}
                        </Button>
                    </form>
                ))}
            </div>
        </div>
    );
};

export default SettingsPage;
