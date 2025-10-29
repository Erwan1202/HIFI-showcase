import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import ImagePlaceHolderSEO from "../components/ImagePlaceHolderSEO";

const Home = () => {
    return (
        <div>
            <Hero />

            {/* SECTION 1 : CATÉGORIES */}
            <section className="container mx-auto p-8 mt-12">
                <h2 className="text-4xl font-bold text-center mb-12">Explorer nos Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <Link to="/produits" className="group relative overflow-hidden rounded-lg">
                        <ImagePlaceHolderSEO alt="Catégorie Casques" width={600} height={600} className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Casques</h3>
                        </div>
                    </Link>

                    <Link to="/produits" className="group relative overflow-hidden rounded-lg">
                        <ImagePlaceHolderSEO alt="Catégorie Enceintes" width={600} height={600} className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Enceintes</h3>
                        </div>
                    </Link>

                    <Link to="/produits" className="group relative overflow-hidden rounded-lg">
                        <ImagePlaceHolderSEO alt="Catégorie Amplis" width={600} height={600} className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">Amplis</h3>
                        </div>
                    </Link>

                </div> 
            </section> 


            {/* SECTION 2 : PRODUITS PHARES (maintenant en dehors de la section 1) */}
            <section className="container mx-auto p-8 mt-12">
                <h2 className="text-4xl font-bold text-center mb-12"> Découvrez nos produits phares</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* On utilisera <ProductCard /> ici plus tard */}

                    <div className="bg-gray-950 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Casque Pro</h3>
                        <p className="text-gray-400">Un casque audio de haute qualité pour les professionnels.</p>
                    </div>

                    <div className="bg-gray-950 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Enceinte Bluetooth</h3>
                        <p className="text-gray-400">Profitez de votre musique partout avec cette enceinte portable.</p>
                    </div>

                    <div className="bg-gray-950 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Amplificateur Hi-Fi</h3>
                        <p className="text-gray-400">Améliorez votre expérience sonore avec notre amplificateur haut de gamme.</p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;