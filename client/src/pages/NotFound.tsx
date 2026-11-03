import { Link } from 'react-router';

const NotFound = () => {
    return <p className="p-12 text-center">Page introuvable. <Link to='/' className="text-primary underline">Retour a l'acceuil'</Link></p>;
}

export default NotFound;
