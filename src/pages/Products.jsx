import ProductCard from '../components/ProductCard';

// DONNÉES STATIQUES (seront remplacées par l'API plus tard)
const staticProducts = [
  { id: 1, name: "Casque Aura Pro", price: 399.99 },
  { id: 2, name: "Enceinte Murale Aura S", price: 1299.00 },
  { id: 3, name: "Ampli A-100", price: 749.99 },
  { id: 4, name: "Casque Aura Mini", price: 199.99 },
  { id: 5, name: "Platine Vinyle Aura V1", price: 499.00 },
  { id: 6, name: "Enceinte Bibliothèque Aura B", price: 699.00 },
];

const Products = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Notre Catalogue</h1>

      {/* Grille de produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staticProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;