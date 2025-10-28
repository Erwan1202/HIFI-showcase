import { Link } from 'react-router-dom';
const placeholderImg = "https://via.placeholder.com/800x600.png?text=Aura+Audio+Pro";

const ProductDetail = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex">
        <img src={placeholderImg} alt="Produit" className="md:w-1/2 w-full object-cover" />
        <div className="p-8 md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Casque Aura Pro (Statique)</h1>
          <p className="text-3xl text-blue-400 font-semibold mb-6">$399.99</p>
          <p className="text-gray-300 text-lg mb-6">
            Ceci est une description statique du produit. Elle sera bientôt remplacée 
            par des données dynamiques venant de notre API. Lorem ipsum dolor sit amet...
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Ajouter au panier (Fictif)
          </button>
          <Link to="/produits" className="block mt-6 text-blue-400 hover:text-blue-300">
            &larr; Retour au catalogue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;