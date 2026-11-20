import type { ReactNode } from "react";
import { Search } from "lucide-react";
import PageHeader from "@components/layout/PageHeader";
import MovementsTable from "@components/MovementsTable";
import { cn } from "@libs/utils";
import { input } from "@libs/style";
import type { Movement } from "@types/movement";

type MovementsPageProps = {
    title: string;
    description: string;
    actions?: ReactNode;
    rows: Movement[];
    filterAllLabel: string;
    filterOptions: { value: string; label: string }[];
    renderActions?: (row: Movement) => ReactNode;
};

const MovementsPage = ({
    title,
    description,
    actions,
    rows,
    filterAllLabel,
    filterOptions,
    renderActions
}: MovementsPageProps) => {
    return (
        <div>
            <PageHeader title={title} description={description} actions={actions} />

            {/* tools bar : recherche + filter */}
            <div className="mt-6 flex flex-wrap gap-4">
                <div className="relative min-w-60 flex-1 sm:max-w-md">
                    <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
                    <input type="search" placeholder="Recherche un lecteur ou un livre" className={input} />
                </div>

                <select defaultValue="" className={cn(input, "m-auto pl-4")}>
                    <option vslue="">{filterAllLabel}</option>
                    {filterOptions.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>

            {/* Table */}
            <div className="mt-8">
                <MovementsTable rows={rows} renderActions={renderActions} />
            </div>
        </div>
    );
};

export default MovementsPage;
