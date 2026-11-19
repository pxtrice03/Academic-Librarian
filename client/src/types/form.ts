import type { LucideIcon } from "lucide-react";

// description of the form fields
export type FieldConfig = {
    id: string; // id and field name
    label: string;
    type: string;
    icon: LucideIcon;
    placeholder?: string;
    autoComplete?: string;
    defaultValue?: string | number;
    min?: number; // min for numerique fields
};
