import { Routes, Route } from 'react-router-dom';

// Importing components for different routes
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Importing pages
import Home from './pages/Home';
import Products from './pages/Products.jsx';
/*import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';*/

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-white">
        <Navbar />
        <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/*<Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />*/}
      </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;