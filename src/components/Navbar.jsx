import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-950 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and name Section */}
                <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400">HIFI Showcase</Link>

                {/* Navigation Links Section */}
                <div className="space-x-6">
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