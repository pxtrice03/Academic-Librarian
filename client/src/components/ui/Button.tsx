import { cn } from "@libs/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center gap-2 text-sm px-5 py-2 font-medium rounded-btn transition-colors duration-500 cursor-pointer",
    variants: {
        variant: {
            default: "bg-accent text-primary-foreground hover:bg-accent/85 hover:text-primary",
            secondary: "text-accent hover:underline",
            outline: "text-muted border border-line bg-card hover:text-primary hover:bg-muted/5",
            danger: "text-danger hover:bg-danger/10 hover:text-danger",
            success: "text-success hover:bg-success/10 hover:text-success"
        },
        size: {
            sm: "",
            md: ""
        },
        defaultVariant: {}
    }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({}) => {
    return <button>button</button>
}

export default Button;
