import type { ReactNode } from "react"; // type du contenu des cellules

/** Une colonne : son en-tête et la fonction qui rend sa cellule. */
export type Column<T> = { header: string; cell: (row: T) => ReactNode };

/** Propriétés du tableau générique. */
type DataTableProps<T> = {
    columns: Column<T>[]; // colonnes à afficher
    rows: T[]; // lignes de données
    getKey: (row: T) => string; // clé unique d'une ligne
    renderActions?: (row: T) => ReactNode; // actions par ligne (absent = lecture seule)
};

/**
 * Tableau générique piloté par une liste de colonnes.
 * @param props - colonnes, lignes, clé et actions optionnelles
 * @returns le tableau, défilant horizontalement sur petit écran
 */
const DataTable = <T,>({ columns, rows, getKey, renderActions }: DataTableProps<T>) => (
    // overflow-x-auto : défile au lieu de casser la mise en page
    <div className="overflow-x-auto rounded-btn border border-line bg-card">
        <table className="w-full text-left text-sm">
            <thead className="bg-muted/10 text-xs uppercase text-muted">
                <tr>
                    {columns.map((c) => (
                        <th key={c.header} className="px-6 py-2 font-medium">{c.header}</th>
                    ))}
                    {/* colonne d'actions seulement si fournie */}
                    {renderActions && <th className="px-6 py-2 text-right font-medium">Actions</th>}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={getKey(row)} className="border-t border-line">
                        {columns.map((c) => (
                            <td key={c.header} className="px-6 py-2">{c.cell(row)}</td>
                        ))}
                        {renderActions && (
                            <td className="px-6">
                                <div className="flex justify-end gap-1">{renderActions(row)}</div>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default DataTable;
