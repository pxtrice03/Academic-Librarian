import { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

type FormFieldProps = {
    label: string;
    htmlFor: string;
    icon: LucideIcon;
    children: ReactNode;
};

const FormField = ({
    label,
    htmlFor,
    icon: Icon,
    children
}: FormFieldProps) => (
    <div className="space-y-2">
        <label htmlFor={htmlFor} className="text-sm font-medium">
            {label}
        </label>
        <div className="relative">
            <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            {children}
        </div>
    </div>
);

export default FormField;
