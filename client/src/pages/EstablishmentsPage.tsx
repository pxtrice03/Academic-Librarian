import { NavLink } from 'react-router';
import {
    ArrowRight,
    Building2,
    MapPin,
    BookOpen,
    Search
} from 'lucide-react';
import NavBar from '@components/layout/NavBar';
import Footer from '@components/layout/Footer';
import { cn } from '@libs/utils';
import { input } from '@libs/style';

// A registered establishment (temporary replaced by de API)
type Establishment = {
    slug: string;
    name: string;
    type: string;
    city: string;
    books: number;
};

/**
 * Annuaire public des etablissements enregistres sur la plateforme.
 * UI seule : recherche et donnees branchees à l'etape logique.
 * @returns la page /e avec recherche et grille d'etablissements
 */
const EstablishmentsPage = () => {
    return ();
}

export default EstablishmentsPage;
