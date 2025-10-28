import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL (ex: /produits/1)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        if (!response.ok) {
          throw new Error('Produit non trouvé');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Cet effet dépend de 'id'. Il se relancera si l'ID change.

  if (loading) {
    return <p className="text-center text-xl mt-12">Chargement du produit...</p>;
  }

  if (error) {
    return <p className="text-center text-xl mt-12 text-red-500">Erreur : {error}</p>;
  }

  if (!product) {
    return <p className="text-center text-xl mt-12">Produit non trouvé.</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="md:w-1/2 w-full object-cover" 
        />
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl text-blue-400 font-semibold mb-6">${product.price}</p>
            <p className="text-gray-300 text-lg mb-6">
              {product.description}
            </p>
          </div>
          <div>
            <Link to="/produits" className="block mt-6 text-blue-400 hover:text-blue-300">
              &larr; Retour au catalogue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;