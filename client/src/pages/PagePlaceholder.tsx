type PagePlaceholderProps = {
    title: string; // page title
};

// returns a title and a card
const PagePlaceholder = ({ title }: PagePlaceholderProps) => (
    <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="mt-6 border border-dashed  border-line p-10 text-center text-sm text-muted-foreround">
            Contenu a venir
        </div>
    </div>
);

export default PagePlaceholder;
