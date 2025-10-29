const Contact = () => {
  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Contactez-Nous</h1>

      {/* Modifications ici */}
      <form 
        action="https://formspree.io/f/meopgbwq" 
        method="POST" 
        className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
          {/* Ajout de 'name' et 'required' */}
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          {/* Ajout de 'name' et 'required' */}
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          {/* Ajout de 'name' et 'required' */}
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;