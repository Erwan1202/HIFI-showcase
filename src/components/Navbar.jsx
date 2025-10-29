import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 p-4 shadow-md">
      {/* On ajoute flex-col et md:flex-row ici */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 mb-4 md:mb-0">
          Aura Audio
        </Link>

        {/* On ajoute aussi flex-col et md:flex-row ici */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">Accueil</Link>
          <Link to="/products" className="text-gray-300 hover:text-white">Produits</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">À Propos</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;