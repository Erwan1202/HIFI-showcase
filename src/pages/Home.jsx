import Hero from "../components/Hero";  

const Home = () => {
    return (
        <div>
            <Hero />

            {/* Section "Produits phares" (statique pour l'instant) */}
            <section className="container mx-auto p-8 mt-12">

                <h2 className="text-4xl font-bold text-center mb-12"> Découvrez nos produits phares</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Inserer ProductCard component ici pour chaque produit */}

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Casque Pro</h3>
                        <p className="text-gray-400">Un casque audio de haute qualité pour les professionnels.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Enceinte Bluetooth</h3>
                        <p className="text-gray-400">Profitez de votre musique partout avec cette enceinte portable.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Amplificateur Hi-Fi</h3>
                        <p className="text-gray-400">Améliorez votre expérience sonore avec notre amplificateur haut de gamme.</p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;