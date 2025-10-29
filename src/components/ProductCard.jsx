import { Link } from 'react-router-dom';
import ImagePlaceholderSEO from './ImagePlaceHolderSEO';


const ProductCard = ({ product }) => {
    return (
        <div className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <ImagePlaceholderSEO
                alt={`Image de ${product.name}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
            />

            {/* Product Info Section */}
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-lg mb-4">${product.price}</p>
                <Link 
                    to={`/products/${product.id}`} 
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Voir Détails
                    </Link>
            </div>
        </div>
    );
};

export default ProductCard;