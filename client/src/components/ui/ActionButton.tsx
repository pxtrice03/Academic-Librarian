import type { LucideIcon } from "lucide-react";
import { cn } from "@libs/utils";
import { Button } from "@components/ui/Button";

type ActionButtonProps = {
    label: string;
    icon: LucideIcon;
    danger?: boolean; // red for destrcutive actions
};

const ActionButton = ({
    label,
    icon: Icon,
    danger = false
}: ActionButtonProps) => {
    return (
        <Button
            type="button"
            title={label}
            variant={cn(
                danger ? "danger" : "secondary"
            )}
        >
            <Icon className="size-4" />
            <span className="hidden lg:inline">{label}</span>
        </Button>
    );
};

export default ActionButton;
