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
const establishmentRoutes = establishmentNav.flatMap((group) => group.items)

console.log(establishmentRoutes)
