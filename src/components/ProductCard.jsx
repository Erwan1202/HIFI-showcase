import { Link } from 'react-router-dom';

// Image temporaire
const PlaceholderImg = 'https://via.placeholder.com/300x200.png?text=Product+Image';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Image Section */}
            <img 
                src={product.imageUrl|| PlaceholderImg} 
                alt={product.name} 
                className="w-full h-48 object-cover"
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