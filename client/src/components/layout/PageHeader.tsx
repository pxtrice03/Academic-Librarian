import type { ReactNode } from 'react';

type PageHeaderProps = {
    title: string;
    description?: string;
    actions?: ReactNode;
};

// Dashboard header( : title left, actions right
const PageHeader = ({
    title,
    description,
    actions
}: PageHeaderProps) => (
    <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            {description && <p className="mt-1 text-sm text-muted">{description}</p>}
        </div>
        {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
    </div>
);

export default PageHeader;
