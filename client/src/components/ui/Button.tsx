import { cn } from "@libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
    "inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-btn transition-colors duration-500 cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-accent text-primary-foreground hover:bg-accent/85 hover:text-primary",
                secondary: "text-accent hover:underline",
                outline: "text-muted border border-line bg-card hover:text-primary hover:bg-muted/5",
                danger: "text-danger hover:bg-danger/10 hover:text-danger",
                success: "text-success hover:bg-success/10 hover:text-success"
            }
        },
        defaultVariants: {
            variant: "default"
        },
    }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ variant, className, ...props }: ButtonProps) => (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
);

export { Button, buttonVariants };
