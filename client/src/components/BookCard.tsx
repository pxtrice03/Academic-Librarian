import { BookOpen } from 'lucide-react';
import { cn } from '@libs/utils';
import { Button } from '@components/ui/Button';
import type { Book } from '@types/book';
import type { ReactNode } from "react";

type BookCardProps = { book: Book; children?: ReactNode };

const BookCard = ({ book, children }: BookCardProps) => {
    const { title, author, category, copies, available } = book;
    const isAvailable = available > 0;

    return (
        <article className="flex flex-col overflow-hidden rounded-card border border-line bg-card">
            {/* temporary cover */}
            <div className="flex h-40 items-center justify-center bg-muted">
                <BookOpen className="size-10 text-accent" />
            </div>

            <div className="flex flex-1 flex-col p-5">
                {/* category + badge for disponibility */}
                <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-muted">{category}</span>
                    <span
                        className={cn(
                            "rounded-full px-3 py-1 text-xs font-medium",
                            isAvailable ? "bg-success/10 text-success" : "bg-accent/15 text-accent-foreground"
                        )}
                    >
                        {available ? 'Disponible' : 'Indisponible'}
                    </span>
                </div>

                {/* title limited to 2 lines to keep cards aligned */}
                <h3 className="mt-3 line-clamp-2 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted">{author}</p>
                <p className="mt-2 text-xs text-muted">
                    {available} / {copies} exemplaires
                </p>

                {children && <div className="mt-auto pt-5">{children}</div>}
            </div>
        </article>
    );
}

export default BookCard;
