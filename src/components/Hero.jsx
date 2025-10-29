// ... imports
const Hero = () => {
  return (
    <div className="bg-gray-800 text-white">
      {/* On réduit la hauteur et le padding sur mobile */}
      <div className="container mx-auto min-h-[50vh] md:h-[60vh] flex flex-col justify-center items-center text-center p-4 md:p-8">
        {/* On ajuste la taille du texte */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          L'Émotion Pure du Son
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Découvrez notre sélection d'équipements Hi-Fi d'exception...
        </p>
        {/* ... le bouton Link ... */}
      </div>
    </div>
  );
};
export default Hero;