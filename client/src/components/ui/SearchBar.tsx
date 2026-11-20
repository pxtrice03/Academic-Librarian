import { Search } from "lucide-react";
import { input } from "@libs/style";

type SearchBarProps = {
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
};

const SearchBar = ({
    placeholder,
    value,
    onChange
}: SearchBarProps) => {
    return (
        <div className="relative min-w-60 flex-1 sm:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
                type="search"
                placeholder={placeholder}
                value={value}
                onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                className={input}
            />
        </div>
    );
};

export default SearchBar;
