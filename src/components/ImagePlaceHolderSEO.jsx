const ImagePlaceholderSEO = ({ alt, width, height, className = "" }) => {
  const placeholderSrc = `https://via.placeholder.com/${width}x${height}.png?text=Aura+Audio`;

  return (
    <img
      src={placeholderSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={className}
    />
  );
};
export default ImagePlaceholderSEO;