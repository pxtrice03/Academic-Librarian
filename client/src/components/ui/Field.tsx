/**
 * Form field description (shared with AuthForm)
*/
export interface FieldDef {
    name: string;
    label: string;
    type?: string;
    options?: {
        value: string;
        label: string;
    }[]
    required?: boolean;
}

interface FieldProps {
    def: FielDef;
    value: string;
    onChange: (v: string) => void;
}

/**
 * Form field : <select> id `option`, else <input>
*/
const Field = ({ def, value, onChange }: FieldProps) => {
    const clsn = "mt-1 w-full border border-line bg-primary px-3 py-2 text-sm outline-none focus:border-primary";
    return (
        <label className="block text-sm font-medium">
        {def.label}
        {def.options ? (
            <select className={clsn} value={value} onChange={(e) => onChange(e.target.value)} required>
                <option value="">-- Choisir --</option>
                {def.options.map((o) => <option key={o.value}>{o.value}</option>)}
            </select>
        ) : (
            <input className={clsn} type={def.type ?? "text"} value={value} required={def.required ?? true} onChange={(e) => onChange(e.target.value)} />
        )}
        </label>
    )
}

export default Field;
