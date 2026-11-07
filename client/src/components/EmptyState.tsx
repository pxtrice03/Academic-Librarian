import type { ReactNode } from "react";
import Mascot from "@components/Mascot";

/** Props of the empty state. */
type EmptyStateProps = {
  message: string; // text explaining the empty result
  children?: ReactNode; // optional action (button, link)
};

/**
 * Empty state with the confused mascot, reusable by any list or table page.
 * @param props - message and optional action
 * @returns a dashed card with the mascot and the message
 */
const EmptyState = ({ message, children }: EmptyStateProps) => (
  <div className="mt-8 flex flex-col items-center rounded-lg border border-dashed border-border px-6 py-12 text-center">
    <Mascot pose="confused" className="w-40" />
    <p className="mt-4 text-sm text-muted-foreground">{message}</p>
    {children}
  </div>
);

export default EmptyState;
