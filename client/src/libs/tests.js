const establishmentNav = [
    {
        title: "General",
        items: [{
            path: "",
            label: "Tableau de bord",
        }]
    },
{
    title: "Catalogue",
    items: [{
        path: "livres",
        label: "Livres"
    }]
},
{
    title: "Circulation",
    items: [
        {
            path: "emprunts",
            label: "Emprunts",
        },
        {
            path: "reservations",
            label: "Reservations"
        },
        {
            path: "historique",
            label: "Historique"
        }
    ]
},
{
    title: "Communaute",
    items: [{
        path: "lecteurs",
        label: "Lecteurs"
    }]
},
{
    title: "Etablissement",
    items: [{
        path: "parametres",
        label: "Parametres"
    }]
}
];

// flat list of items
// const establishmentRoutes = establishmentNav.flatMap((group) => group.items)

const books = [
    { id: '1', title: 'Algorithmique et structure de donnees', author: 'Dr. Noumssi', category: 'Informatique', copies: 938, available: 552 },
    { id: '2', title: 'Architecture des Ordinateurs', author: 'Dr. Nfongourain Remi', category: 'Informatique', copies: 1002, available: 101 },
    { id: '3', title: 'Principes de comptabilite generale', author: 'M. Ngono', category: 'FSEGA', copies: 552, available: 220 },
    { id: '4', title: 'Biologie Cellulaire', author: 'B. Alberts', category: 'BIO', copies: 1034, available: 97 }
];

const categories = [...new Set(books.map((b) => b.category))]

console.log(categories)
