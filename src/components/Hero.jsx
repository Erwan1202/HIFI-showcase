import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto h-[60vh] flex flex-col justify-center items-center text-center p-8">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">L'Emotion Pure du Son</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">Découvrez notre sélection exclusive de matériel audio haut de gamme pour une expérience sonore inégalée.</p>
                <Link to="/products" className="bg-blue-600  hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">
                    Explorer les Produits
                </Link>

            </div>
        </div>
    );
};

export default Hero;