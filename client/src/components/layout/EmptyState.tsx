import type { ReactNode } from "react";
import Mascot from "@components/Mascot";

type EmptyStateProps = {
    message: string;
    children?: ReactNode;
};

/**
 * Empty state with the confused mascot
 */
const EmptyState = ({ message, children }: EmptyStateProps) => (
    <div className="mt-8 flex flex-col items-center rounded-card border border-dashed border-line px-6 py-12 text-center">
        <Mascot pose="confused" className="w-40" />
        <p className="mt-4 text-sm text-muted">{message}</p>
        {children}
    </div>
);

export default EmptyState;
