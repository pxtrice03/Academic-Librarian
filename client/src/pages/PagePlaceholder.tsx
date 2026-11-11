type PagePlaceholderProps = {
    title: string // page title
};

// returns a title and a card
const PagePlaceholder = ({ title }: PagePlaceholderProps) => (
    <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        {/* empty dotted card */}
        <div className="mt-6 border-2 border-dashed border-line/50 rounded-card p-10 text-center text-sm text-muted-foreround">
            Coming soon...
        </div>
    </div>
);

export default PagePlaceholder;
